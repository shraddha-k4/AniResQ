// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Share,
// } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import { useLocalSearchParams, router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons";
// import { Get_Report_By_Id } from "../../Apiendpoint.jsx";

// export default function ReportDetails() {
//   const { id } = useLocalSearchParams();
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [address, setAddress] = useState("");

//   useEffect(() => {
//     fetchReport();
//   }, []);

//   const fetchReport = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const res = await fetch(Get_Report_By_Id(id), {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       setReport(data.report);

//       if (data.report?.location) {
//         const geo = await Location.reverseGeocodeAsync({
//           latitude: data.report.location.latitude,
//           longitude: data.report.location.longitude,
//         });

//         if (geo.length > 0) {
//           const g = geo[0];
//           setAddress(
//             `${g.name || ""} ${g.street || ""}, ${g.city || ""}, ${
//               g.region || ""
//             }`
//           );
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // SHARE FUNCTION
//   const shareReport = async () => {
//     try {
//       const message = `
// Report Details

// Status: ${report.status}
// Animal: ${report.animalType}
// Behavior: ${report.behavior}
// Injured: ${report.injured}
// Human Harm: ${report.humanHarm}
// Date: ${new Date(report.incidentDate).toLocaleDateString()}
// Address: ${address || report.address}
//       `;

//       await Share.share({ message });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading)
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" />
//       </View>
//     );

//   if (!report)
//     return <Text style={{ textAlign: "center" }}>No report found</Text>;

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={26} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Report Details</Text>
//       </View>

//       {/* Image */}
//       {report.image && (
//         <Image source={{ uri: report.image }} style={styles.image} />
//       )}

//       {/* STATUS BUTTON RIGHT SIDE */}
//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Status</Text>
//         <TouchableOpacity style={styles.statusBtn}>
//           <Text style={styles.statusText}>{report.status}</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Date</Text>
//         <Text style={styles.value}>
//           {new Date(report.incidentDate).toLocaleDateString()}
//         </Text>
//       </View>

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Time</Text>
//         <Text style={styles.value}>
//           {new Date(report.incidentDate).toLocaleTimeString()}
//         </Text>
//       </View>

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>What type of animal is it?</Text>
//         <Text style={styles.value}>{report.animalType}</Text>
//       </View>

//       <View style={styles.rowCard1}>
//         <Text style={styles.label}>
//           Is the animal aggressive or behaving abnormally?
//         </Text>
//         <Text style={styles.value}>{report.behavior}</Text>
//       </View>

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Is the Animal Injured?</Text>
//         <Text style={styles.value}>{report.injured}</Text>
//       </View>

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Was any person harmed?</Text>
//         <Text style={styles.value}>{report.humanHarm}</Text>
//       </View>

//       {/* MAP */}
//       {report.location && (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: report.location.latitude,
//             longitude: report.location.longitude,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//           }}
//         >
//           <Marker
//             coordinate={{
//               latitude: report.location.latitude,
//               longitude: report.location.longitude,
//             }}
//           />
//         </MapView>
//       )}

//       <View style={styles.rowCard}>
//         <Text style={styles.label}>Address</Text>
//         <Text style={styles.value}>{address || report.address}</Text>
//       </View>

//       {/* SHARE BUTTON */}
//       <TouchableOpacity style={styles.shareBtn} onPress={shareReport}>
//         <Text style={styles.shareText}>Share Report</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F6FA",
//   },

//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 20,
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },

//   image: {
//     width: "90%",
//     height: 220,
//     alignSelf: "center",
//     borderRadius: 20,
//     marginBottom: 20,
//   },

//   rowCard: {
//     backgroundColor: "white",
//     marginHorizontal: 15,
//     marginBottom: 12,
//     padding: 15,
//     borderRadius: 15,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     elevation: 2,
//   },

//   rowCard1: {
//     backgroundColor: "white",
//     marginHorizontal: 15,
//     marginBottom: 12,
//     padding: 20,
//     borderRadius: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     elevation: 2,
//   },

//   label: {
//     fontSize: 15,
//     color: "gray",
//     flex: 1,
//     paddingRight: 10,
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   statusBtn: {
//     backgroundColor: "#28A745",
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },

//   statusText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 14,
//   },

//   shareBtn: {
//     backgroundColor: "#007BFF",
//     marginHorizontal: 20,
//     marginVertical: 20,
//     padding: 15,
//     borderRadius: 30,
//     alignItems: "center",
//   },

//   shareText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },

//   map: {
//     width: "90%",
//     height: 200,
//     alignSelf: "center",
//     borderRadius: 20,
//     marginVertical: 15,
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  Modal,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import ImageViewer from "react-native-image-zoom-viewer";
import { Get_Report_By_Id } from "../../Apiendpoint.jsx";

export default function ReportDetails() {
  const { id } = useLocalSearchParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const res = await fetch(Get_Report_By_Id(id), {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setReport(data.report);

      if (data.report?.location) {
        const geo = await Location.reverseGeocodeAsync({
          latitude: data.report.location.latitude,
          longitude: data.report.location.longitude,
        });

        if (geo.length > 0) {
          const g = geo[0];
          setAddress(
            `${g.name || ""} ${g.street || ""}, ${g.city || ""}, ${
              g.region || ""
            }`
          );
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const shareReport = async () => {
    try {
      const message = `
Report Details

Status: ${report.status}
Animal: ${report.animalType}
Behavior: ${report.behavior}
Injured: ${report.injured}
Human Harm: ${report.humanHarm}
Date: ${new Date(report.incidentDate).toLocaleDateString()}
Address: ${address || report.address}
      `;
      await Share.share({ message });
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ STATUS COLOR FIX
  const getStatusStyle = () => {
    switch (report?.status?.trim()) {
      case "Pending":
        return styles.pending;
      case "Accepted":
        return styles.accepted;
      case "In Progress":
        return styles.inProgress;
      case "Resolved":
        return styles.resolved;
      default:
        return styles.pending;
    }
  };

  if (loading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );

  if (!report)
    return <Text style={{ textAlign: "center" }}>No report found</Text>;

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} />
        </TouchableOpacity>
        <Text style={styles.title}>Report Details</Text>
      </View>

      {/* IMAGE ZOOM */}
      {report.image && (
        <>
          <TouchableOpacity onPress={() => setShowImage(true)}>
            <Image source={{ uri: report.image }} style={styles.image} />
          </TouchableOpacity>

          <Modal visible={showImage} transparent>
            <View style={{ flex: 1, backgroundColor: "black" }}>
              {/* BACK ARROW */}
              <TouchableOpacity
                onPress={() => setShowImage(false)}
                style={styles.zoomBackBtn}
              >
                <Ionicons name="arrow-back" size={28} color="white" />
              </TouchableOpacity>

              <ImageViewer
                imageUrls={[{ url: report.image }]}
                enableSwipeDown
                onCancel={() => setShowImage(false)}
              />
            </View>
          </Modal>
        </>
      )}

      {/* STATUS BUTTON */}
      <View style={styles.rowCard}>
        <Text style={styles.label}>Status</Text>

        <TouchableOpacity style={[styles.statusBtn, getStatusStyle()]}>
          <Text style={styles.statusText}>{report.status}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowCard}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>
          {new Date(report.incidentDate).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.rowCard}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>
          {new Date(report.incidentDate).toLocaleTimeString()}
        </Text>
      </View>

      <View style={styles.rowCard}>
        <Text style={styles.label}>Animal Type</Text>
        <Text style={styles.value}>{report.animalType}</Text>
      </View>

      <View style={styles.rowCard1}>
        <Text style={styles.label}>
          Is the animal aggressive or behaving abnormally?
        </Text>
        <Text style={styles.value}>{report.behavior}</Text>
      </View>

      <View style={styles.rowCard}>
        <Text style={styles.label}>Is the Animal Injured?</Text>
        <Text style={styles.value}>{report.injured}</Text>
      </View>

      <View style={styles.rowCard}>
        <Text style={styles.label}>Was any person harmed?</Text>
        <Text style={styles.value}>{report.humanHarm}</Text>
      </View>

      {/* MAP */}
      {report.location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: report.location.latitude,
            longitude: report.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={report.location} />
        </MapView>
      )}

      <View style={styles.rowCard}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{address || report.address}</Text>
      </View>

      {/* SHARE BUTTON */}
      <TouchableOpacity style={styles.shareBtn} onPress={shareReport}>
        <Text style={styles.shareText}>Share Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA" },

  loader: { flex: 1, justifyContent: "center", alignItems: "center" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  title: { fontSize: 22, fontWeight: "bold", marginLeft: 10 },

  image: {
    width: "90%",
    height: 220,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 20,
  },

  zoomBackBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },

  rowCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  rowCard1: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  label: { fontSize: 15, color: "gray", flex: 1, paddingRight: 10 },

  value: { fontSize: 16, fontWeight: "600" },

  statusBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: { color: "white", fontWeight: "bold", fontSize: 14 },

  pending: { backgroundColor: "red" },
  accepted: { backgroundColor: "#FFC107" },
  inProgress: { backgroundColor: "orange" },
  resolved: { backgroundColor: "green" },

  shareBtn: {
    backgroundColor: "#007BFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  shareText: { color: "white", fontWeight: "bold", fontSize: 16 },

  map: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 15,
  },
});
