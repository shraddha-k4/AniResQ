// // AdminDashboard                                                               
// import { useRouter } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// import NGOManagement from "../admin/NGOManagement.jsx";
// import { Image } from "react-native";

// const StatCard = ({ title, value }) => (
//   <View style={styles.card}>
//     <Text style={styles.cardValue}>{value}</Text>
//     <Text style={styles.cardTitle}>{title}</Text>
//   </View>
// );
// const router = useRouter();


// export default function AdminDashboard() {
//   return (
    
//     <ScrollView style={styles.container}>
    
//       <Text style={styles.heading}>AniResQ Admin Dashboard</Text>

//       {/* Stats Section */}
//       <View style={styles.statsContainer}>
//         <StatCard title="Total Reports" value="128" />
//         <StatCard title="Ongoing Rescues" value="32" />
//         <StatCard title="Completed Rescues" value="76" />
//         <StatCard title="Blacklisted Users" value="4" />
//       </View>

//       {/* Management Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Management</Text>

//        <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/admin/ManageUsers")}>
//          <Text style={styles.buttonText}>Manage Users</Text>
//        </TouchableOpacity>


//        <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/admin/NGOManagement")}>
//          <Text style={styles.buttonText}>Manage NGOs</Text>
//        </TouchableOpacity>


//       <TouchableOpacity style={[styles.button, { backgroundColor: "#ff4d4d" }]}>
//           <Text style={styles.buttonText}>View Blacklisted Accounts</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Analytics Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Analytics Overview</Text>
//         <View style={styles.analyticsBox}>
//           <Text style={styles.analyticsText}>
//             Reports have increased by 18% this month.
//           </Text>
//           <Text style={styles.analyticsText}>
//             Average rescue time: 2.3 days
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f6f9",
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#1c1c1e",
//   },
//   statsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     width: "48%",
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   cardValue: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#2e7d32",
//   },
//   cardTitle: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 5,
//   },
//   section: {
//     marginTop: 25,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 15,
//     color: "#333",
//   },
//   button: {
//     backgroundColor: "#2e7d32",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 12,
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   analyticsBox: {
//     backgroundColor: "#ffffff",
//     padding: 20,
//     borderRadius: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   analyticsText: {
//     fontSize: 14,
//     marginBottom: 8,
//     color: "#444",
//   },
// });

// AdminDashboard

import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const StatCard = ({ title, value }) => (
  <View style={styles.card}>
    <Text style={styles.cardValue}>{value}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
);

export default function AdminDashboard() {
  const router = useRouter(); // ✅ FIXED: moved inside component

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>AniResQ Admin Dashboard</Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <StatCard title="Total Reports" value="128" />
        <StatCard title="Ongoing Rescues" value="32" />
        <StatCard title="Completed Rescues" value="76" />
        <StatCard title="Blacklisted Users" value="4" />
      </View>

      {/* Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Management</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../admin/ManageUsers")}
        >
          <Text style={styles.buttonText}>Manage Users</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../admin/NGOManagement")}
        >
          <Text style={styles.buttonText}>Manage NGOs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ff4d4d" }]}
          onPress={() => router.push("../admin/Blacklist")}
        >
          <Text style={styles.buttonText}>View Blacklisted Accounts</Text>
        </TouchableOpacity>
      </View>

      {/* Analytics Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analytics Overview</Text>
        <View style={styles.analyticsBox}>
          <Text style={styles.analyticsText}>
            Reports have increased by 18% this month.
          </Text>
          <Text style={styles.analyticsText}>
            Average rescue time: 2.3 days
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1c1c1e",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#ffffff",
    width: "48%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  cardTitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  section: {
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  button: {
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  analyticsBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  analyticsText: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444",
  },
});
