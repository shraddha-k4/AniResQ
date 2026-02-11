// import { View, Text, StyleSheet } from 'react-native';

// export default function cases() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome NGO Cases</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: '700',
//   },
// });

import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function cases() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reported Cases</Text>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>All (12)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Urgent (5)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>New (7)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.caseId}>#AC-2847</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>URGENT</Text>
          </View>
        </View>

        <View style={styles.userRow}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Sarah Johnson</Text>
            <Text style={styles.location}>Downtown District, 2.3 km away</Text>
          </View>
        </View>

        <Image
          source={{ uri: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" }}
          style={styles.animalImage}
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Animal Type: Dog (Street)</Text>
          <Text style={styles.infoText}>Condition: Injured - Bleeding</Text>
          <Text style={styles.infoText}>Reported: 15 mins ago</Text>
        </View>

        <Text style={styles.description}>
          Found injured dog near Main Street. Appears to have been hit by vehicle.
          Needs immediate medical attention.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },
  activeTab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#2563eb",
  },
  tabText: { color: "white" },
  card: {
    backgroundColor: "#020617",
    borderRadius: 20,
    padding: 16,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  caseId: { color: "#3b82f6", fontWeight: "600" },
  badge: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { color: "white", fontSize: 12 },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { color: "white", fontWeight: "600" },
  location: { color: "#94a3b8", fontSize: 12 },
  animalImage: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    marginBottom: 12,
  },
  infoBox: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
  },
  infoText: { color: "white", fontSize: 13 },
  description: { color: "#cbd5f5", fontSize: 13 },
});