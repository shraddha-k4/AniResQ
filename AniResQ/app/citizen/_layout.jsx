import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Slot, usePathname, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function NavItem({ icon, label, route }) {
  const pathname = usePathname();
  const active = pathname === route;

  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => router.push(route)}
    >
      <Ionicons
        name={icon}
        size={22}
        color={active ? "#0d8139" : "#999"}
      />
      <Text style={[styles.navText, active && styles.activeText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function CitizenLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Screen Content */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home"
          label="Home"
          route="/citizen/home"
        />
        <NavItem
          icon="document-text-outline"
          label="Cases"
          route="/citizen/cases"
        />
        <NavItem
          icon="people-outline"
          label="NGOs"
          route="/citizen/ngoinfo"
        />
        <NavItem
          icon="person-outline"
          label="Profile"
          route="/citizen/profile"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
   bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  activeText: {
    color: "#0d8139",
    fontWeight: "700",
  },
});

