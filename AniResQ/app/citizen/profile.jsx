import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <LinearGradient
        colors={["#4f7cff", "#8a3ffc"]}
        style={{ padding: 20, paddingTop: 60 }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12 }}
          />
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
            Rahul Sharma
          </Text>
          <Text style={{ color: "#e0e0ff", marginBottom: 16 }}>
            MLA • Constituency Name
          </Text>

          <View style={{ flexDirection: "row", gap: 40 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                32
              </Text>
              <Text style={{ color: "#e0e0ff", fontSize: 12 }}>
                Issues Raised
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                ₹5Cr
              </Text>
              <Text style={{ color: "#e0e0ff", fontSize: 12 }}>
                Funds Utilized
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Section */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
          Personal Information
        </Text>

        <InfoItem icon="mail" text="rahul.sharma@gmail.com" />
        <InfoItem icon="call" text="+91 98765 43210" />
        <InfoItem icon="location" text="Mumbai, Maharashtra" />
        <InfoItem icon="calendar" text="Elected: March 2022" />
      </View>
    </ScrollView>
  );
}

function InfoItem({ icon, text }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <Ionicons name={icon} size={20} color="#6b7280" />
      <Text style={{ marginLeft: 12, fontSize: 15, color: "#374151" }}>
        {text}
      </Text>
    </View>
  );
}
