// NGOManagement.jsx

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const dummyNGOs = [
  {
    id: 1,
    name: "WildCare Foundation",
    location: "Pune",
    lastRescueDays: 5,
    totalRescues: 42,
    status: "Active",
  },
  {
    id: 2,
    name: "Animal Shield NGO",
    location: "Mumbai",
    lastRescueDays: 18,
    totalRescues: 30,
    status: "Flagged",
  },
  {
    id: 3,
    name: "Green Paws Rescue",
    location: "Nashik",
    lastRescueDays: 22,
    totalRescues: 12,
    status: "Blacklisted",
  },
];

export default function NGOManagement() {
  const [ngos, setNgos] = useState(dummyNGOs);
  const [expandedId, setExpandedId] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleBlacklist = (id) => {
    const updated = ngos.map((ngo) =>
      ngo.id === id
        ? {
            ...ngo,
            status:
              ngo.status === "Blacklisted" ? "Active" : "Blacklisted",
          }
        : ngo
    );
    setNgos(updated);
  };

  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.heading}>NGO Management</Text>

        {ngos.map((ngo) => (
          <Animated.View
            key={ngo.id}
            style={[styles.glassCard, { opacity: fadeAnim }]}
          >
            <TouchableOpacity
              onPress={() =>
                setExpandedId(expandedId === ngo.id ? null : ngo.id)
              }
            >
              <Text style={styles.name}>{ngo.name}</Text>
              <Text style={styles.location}>
                📍 {ngo.location}
              </Text>

              <Text
                style={[
                  styles.status,
                  ngo.status === "Blacklisted" && {
                    color: "#ff4d4d",
                  },
                  ngo.status === "Flagged" && {
                    color: "#ffcc00",
                  },
                ]}
              >
                {ngo.status}
              </Text>
            </TouchableOpacity>

            {expandedId === ngo.id && (
              <View style={styles.detailsBox}>
                <Text style={styles.detailText}>
                  Total Rescues: {ngo.totalRescues}
                </Text>
                <Text style={styles.detailText}>
                  Last Rescue: {ngo.lastRescueDays} days ago
                </Text>

                {ngo.lastRescueDays > 15 && (
                  <Text style={styles.warning}>
                    ⚠ Inactive for more than 15 days
                  </Text>
                )}
              </View>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.blacklistBtn}
                onPress={() => toggleBlacklist(ngo.id)}
              >
                <Text style={styles.btnText}>
                  {ngo.status === "Blacklisted"
                    ? "Reactivate"
                    : "Blacklist"}
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  glassCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  location: {
    color: "#ccc",
    marginVertical: 4,
  },
  status: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  detailsBox: {
    marginTop: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 12,
    borderRadius: 15,
  },
  detailText: {
    color: "#ddd",
    marginBottom: 4,
  },
  warning: {
    color: "#ffcc00",
    marginTop: 5,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 15,
  },
  blacklistBtn: {
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 12,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});