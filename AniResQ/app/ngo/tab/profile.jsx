// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// export default function ngoprofile() {
//   const [edit, setEdit] = useState(false);

//   const [ngoName, setNgoName] = useState("Helping Hands Foundation");
//   const [about, setAbout] = useState(
//     "Helping Hands Foundation is dedicated to rescuing, treating, and rehabilitating injured and abandoned animals across Maharashtra."
//   );
//   const [phone, setPhone] = useState("+91 98765 43210");
//   const [email, setEmail] = useState("helpinghands@aniresq.org");

//   return (
//     <ScrollView
//       style={styles.container}
//       showsVerticalScrollIndicator={false}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={26} color="#111" />
//         <Text style={styles.headerTitle}>NGO Profile</Text>
//         <Ionicons name="ellipsis-vertical" size={24} color="#111" />
//       </View>
   

//       {/* NGO Card */}
//       <View style={styles.profileCard}>
//         {/* 🔥 CIRCULAR IMAGE (FIXED) */}
//         <View style={styles.imageRing}>
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1601758003122-58e0a1c5c23b",
//             }}
//             style={styles.profileImg}
//             resizeMode="cover"
//           />
//         </View>

//         {edit ? (
//           <TextInput
//             value={ngoName}
//             onChangeText={setNgoName}
//             style={styles.editInputTitle}
//             placeholderTextColor="#CCFBF1"
//           />
//         ) : (
//           <Text style={styles.name}>{ngoName}</Text>
//         )}

//         <Text style={styles.role}>Registered NGO • Since 2018</Text>

//         <View style={styles.statsRow}>
//           <Stat number="320+" label="Animals Rescued" />
//           <Stat number="150+" label="Volunteers" />
//           <Stat number="98%" label="Success Rate" />
//         </View>
//       </View>

//       {/* About NGO */}
//       <Text style={styles.sectionTitle}>About NGO</Text>
//       <View style={styles.infoCard}>
//         {edit ? (
//           <TextInput
//             value={about}
//             onChangeText={setAbout}
//             multiline
//             style={styles.editInput}
//           />
//         ) : (
//           <Text style={styles.aboutText}>{about}</Text>
//         )}
//       </View>

//       {/* NGO Details */}
//       <Text style={styles.sectionTitle}>NGO Details</Text>
//       <View style={styles.infoCard}>
//         <InfoRow icon="call" text={phone} edit={edit} onChange={setPhone} />
//         <InfoRow icon="mail" text={email} edit={edit} onChange={setEmail} />
//         <InfoRow icon="location-on" text="Pune, Maharashtra" />
//         <InfoRow icon="verified" text="Government Registered NGO" />
//       </View>

//       {/* Buttons */}
//       <TouchableOpacity style={styles.editBtn} onPress={() => setEdit(!edit)}>
//         <Text style={styles.editText}>
//           {edit ? "Save Profile" : "Edit Profile"}
//         </Text>
//       </TouchableOpacity>

      
//     </ScrollView>
//   );
// }

// /* ---------- Small Components ---------- */

// const Stat = ({ number, label }) => (
//   <View style={{ alignItems: "center" }}>
//     <Text style={{ color: "#fff", fontSize: 20, fontWeight: "900" }}>
//       {number}
//     </Text>
//     <Text style={{ color: "#CCFBF1", fontSize: 13 }}>{label}</Text>
//   </View>
// );

// const InfoRow = ({ icon, text, edit, onChange }) => (
//   <View style={styles.infoRow}>
//     <MaterialIcons name={icon} size={24} color="#6B7280" />
//     {edit && onChange ? (
//       <TextInput
//         value={text}
//         onChangeText={onChange}
//         style={styles.editInputSmall}
//       />
//     ) : (
//       <Text style={styles.infoText}>{text}</Text>
//     )}
//   </View>
// );

// /* ---------- Styles ---------- */

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 16 },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 18,
//   },
//   headerTitle: { fontSize: 22, fontWeight: "800" },

//   appRow: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
//   appLogo: { width: 40, height: 40 },
//   appName: { marginLeft: 10, fontSize: 22, fontWeight: "800" },

//   profileCard: {
//     backgroundColor: "#0F766E",
//     borderRadius: 22,
//     padding: 24,
//     alignItems: "center",
//     marginBottom: 22,
//   },

//   /* ✅ IMAGE RING FIXED */
//   imageRing: {
//     width: 124,
//     height: 124,
//     borderRadius: 62,
//     borderWidth: 4,
//     borderColor: "#99f6e4",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//     overflow: "hidden", // 🔥 MOST IMPORTANT
//   },
//   profileImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 62,
//   },

//   name: { color: "#fff", fontSize: 24, fontWeight: "900" },
//   role: { color: "#CCFBF1", fontSize: 15, marginBottom: 16 },

//   statsRow: {
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "space-between",
//   },

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "900",
//     marginVertical: 16,
//     color: "#111827",
//   },

//   infoCard: {
//     backgroundColor: "#F9FAFB",
//     borderRadius: 16,
//     padding: 14,
//   },
//   aboutText: { fontSize: 15, color: "#374151", lineHeight: 22 },

//   infoRow: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
//   infoText: { marginLeft: 12, fontSize: 15 },

//   editInput: { fontSize: 15, color: "#111" },
//   editInputTitle: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "900",
//     borderBottomWidth: 1,
//     borderColor: "#99f6e4",
//     marginBottom: 6,
//   },
//   editInputSmall: {
//     marginLeft: 12,
//     fontSize: 15,
//     flex: 1,
//     borderBottomWidth: 1,
//     borderColor: "#ddd",
//   },

//   editBtn: {
//     backgroundColor: "#16A34A",
//     padding: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     marginTop: 22,
//     marginBottom:30,
//   },
//   editText: { color: "#fff", fontSize: 16, fontWeight: "700" },

//   supportBtn: {
//     backgroundColor: "#E5E7EB",
//     padding: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     marginTop: 12,
//     marginBottom: 40,
//   },
//   supportText: { fontSize: 16, fontWeight: "700" },
// });





// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
// } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Auth_profile } from "../../Apiendpoint.jsx";

// /* ---------------- HELPER ---------------- */
// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// };

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");
//       if (!token) return;

//       const res = await fetch(Auth_profile, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       setUser(data.user);
//     } catch (err) {
//       console.log("Profile error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Ionicons
//           name="arrow-back"
//           size={26}
//           color="black"
//           onPress={() => router.replace("/ngo/home")}
//         />
//         <Text style={styles.headerTitle}>Profile</Text>
//         <View style={{ width: 26 }} />
//       </View>

//       {/* PROFILE CARD */}
//       <View style={styles.profileCard}>
//         <Image
//           source={
//             user?.image
//               ? { uri: user.image }
//               : require("../../assets/image/profile.png")
//           }
//           style={styles.profileImg}
//         />
//         <Text style={styles.name}>{user?.name}</Text>
//         <Text style={styles.role}>{user?.role}</Text>
//       </View>

//       {/* BASIC INFO */}
//       <View style={styles.infoCard}>
//         <InfoRow icon="mail" text={user?.email} />
//         <InfoRow icon="call" text={String(user?.mobileno || "")} />
//         <InfoRow
//           icon="location-on"
//           text={[
//             user?.address?.city,
//             user?.address?.dist,
//             user?.address?.state,
//           ]
//             .filter(Boolean)
//             .join(", ")}
//         />
//         <InfoRow
//           icon="calendar-today"
//           text={`Joined on ${formatDate(user?.createdAt)}`}
//         />
//       </View>

//       {/* ABOUT US */}
//       {user?.regiid? (
//         <>
//           <Text style={styles.sectionTitle}>Registration ID</Text>
//           <View style={styles.aboutCard}>
//             <Text style={styles.aboutText}>{user.regiid}</Text>
//           </View>
//         </>
//       ) : null}

//       {user?.aboutus ? (
//         <>
//           <Text style={styles.sectionTitle}>About Us</Text>
//           <View style={styles.aboutCard}>
//             <Text style={styles.aboutText}>{user.aboutus}</Text>
//           </View>
//         </>
//       ) : null}

//       {user?.mission ? (
//         <>
//           <Text style={styles.sectionTitle}>Our Mission</Text>
//           <View style={styles.aboutCard}>
//             <Text style={styles.aboutText}>{user.mission}</Text>
//           </View>
//         </>
//       ) : null}

//       {/* EDIT BUTTON */}
//       <TouchableOpacity
//         style={styles.editBtn}
//         onPress={() =>
//           router.push({
//             pathname: "/ngo/EditProfile",
//             params: { user: JSON.stringify(user) },
//           })
//         }
//       >
//         <Text style={styles.editText}>Edit Profile</Text>
//       </TouchableOpacity>

//       {/* LOGOUT */}
//       <TouchableOpacity
//         style={styles.logoutBtn}
//         onPress={async () => {
//           await AsyncStorage.removeItem("token");
//           router.replace("/");
//         }}
//       >
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */
// const InfoRow = ({ icon, text }) => (
//   <View style={styles.infoRow}>
//     <MaterialIcons name={icon} size={22} color="#6B7280" />
//     <Text style={styles.infoText}>{text || "-"}</Text>
//   </View>
// );

// /* ---------------- STYLES ---------------- */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     padding: 14,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginleft: 20,
//   },
  
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginLeft: 10,
//     color: "#1B1B1B",
//     marginTop:9,
//     padding:4
//   },
//   profileCard: {
//     backgroundColor: "#2E7D32",
//     borderRadius: 28,
//     padding: 24,
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   profileImg: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     marginBottom: 12,
//   },
//   name: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "900",
//   },
//   role: {
//     color: "#EDE9FE",
//     fontSize: 14,
//   },

//   infoCard: {
//     backgroundColor: "#F9FAFB",
//     borderRadius: 16,
//     padding: 14,
//     marginBottom: 12,
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 8,
//   },
//   infoText: {
//     marginLeft: 12,
//     fontSize: 15,
//     color: "#374151",
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "800",
//     marginVertical: 12,
//     color: "#111827",
//   },

//   aboutCard: {
//     backgroundColor: "#F9FAFB",
//     borderRadius: 16,
//     padding: 16,
//   },
//   aboutText: {
//     fontSize: 15,
//     color: "#374151",
//     lineHeight: 22,
//   },

//   editBtn: {
//     backgroundColor: "#2E7D32",
//     padding: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   editText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "700",
//   },

//   logoutBtn: {
//     backgroundColor: "#E5E7EB",
//     padding: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     marginTop: 12,
//     marginBottom: 40,
//   },
//   logoutText: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#111827",
//   },
// });


import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth_profile } from "../../../Apiendpoint.jsx";

/* ---------------- HELPER ---------------- */
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); // Ensure this matches your storage key
      //console.log("Retrieved token:", token); // Debug: Check if token exists
      if (!token) {
        Alert.alert("Error", "No token found. Please log in.");
        setLoading(false);
        return;
      }

      const res = await fetch(Auth_profile, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Add if needed
        },
      });

      //console.log("Response status:", res.status); // Debug: Check status
      if (!res.ok) {
        const errorText = await res.text();
        //console.log("Error response:", errorText); // Debug: Log error details
        throw new Error(`Failed to fetch profile: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      //console.log("Fetched data:", data); // Debug: Check full response
      setUser(data.user);
    } catch (err) {
      console.log("Profile fetch error:", err);
      Alert.alert("Error", err.message);
      setUser(null); // Reset user on error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={26}
          color="black"
          onPress={() => router.replace.back}
        />
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <Image
          source={
            user?.image
              ? { uri: user.image }
              : require("../../../assets/image/profile.png")
          }
          style={styles.profileImg}
        />
        <Text style={styles.name}>{user?.name || "No name"}</Text>
        <Text style={styles.role}>{user?.role || "No role"}</Text>
      </View>

      {/* BASIC INFO */}
      <View style={styles.infoCard}>
        <InfoRow icon="mail" text={user?.email || "No email"} />
        <InfoRow icon="call" text={String(user?.mobileno || "")} />
        <InfoRow
          icon="location-on"
          text={[
            user?.address?.city,
            user?.address?.dist,
            user?.address?.state,
          ]
            .filter(Boolean)
            .join(", ") || "No address"}
        />
        <InfoRow
          icon="calendar-today"
          text={`Joined on ${formatDate(user?.createdAt)}`}
        />
      </View>

      {/* REGISTRATION ID */}
      {user?.regiid ? (
        <>
          <Text style={styles.sectionTitle}>Registration ID</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>{user.regiid}</Text>
          </View>
        </>
      ) : null}

      {/* ABOUT US */}
      {user?.aboutus ? (
        <>
          <Text style={styles.sectionTitle}>About Us</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>{user.aboutus}</Text>
          </View>
        </>
      ) : null}

      {/* OUR MISSION */}
      {user?.mission ? (
        <>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>{user.mission}</Text>
          </View>
        </>
      ) : null}

      {/* EDIT BUTTON */}
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() =>
          router.push({
            pathname: "/ngo/EditProfile",
            params: { user: JSON.stringify(user) },
          })
        }
      >
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          router.replace("/");
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ---------------- COMPONENTS ---------------- */
const InfoRow = ({ icon, text }) => (
  <View style={styles.infoRow}>
    <MaterialIcons name={icon} size={22} color="#6B7280" />
    <Text style={styles.infoText}>{text || "-"}</Text>
  </View>
);

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
    color: "#1B1B1B",
    marginTop: 9,
    padding: 4,
  },
  profileCard: {
    backgroundColor: "#6b7cf6",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  profileImg: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  role: {
    color: "#EDE9FE",
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#374151",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 12,
    color: "#111827",
  },
  aboutCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
  },
  aboutText: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
  editBtn: {
    backgroundColor: "#6b7cf6",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  logoutBtn: {
    backgroundColor: "#E5E7EB",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 40,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
});