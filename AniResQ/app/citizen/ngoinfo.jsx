// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
// } from "react-native";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { router } from "expo-router";
// import { Auth_profile } from "../../Apiendpoint.jsx";

// export default function Cases() {
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
//       console.log("Profile fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.screen}>
//       {/* 🔹 HEADER */}
//       <View style={styles.header}>
//         {/* Logo + Name */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require("../../assets/image/aniresq.png")}
//             style={styles.logoImage}
//           />
//           <Text style={styles.logoText}>AniResQ</Text>
//         </View>

//         {/* Profile Image from Backend */}
//         <TouchableOpacity onPress={() => router.push("/citizen/profile")}>
//           <Image
//             source={
//               user?.image
//                 ? { uri: user.image }
//                 : require("../../assets/image/profile.png")
//             }
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* 🔹 BODY */}
//       <View style={styles.container}>
//         <Text style={styles.text}>Welcome ngo </Text>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   },

//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   header: {
//     height: 70,
//     paddingHorizontal: 12,
//     backgroundColor: "white",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     elevation: 4, // Android shadow
//   },

//   logoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   logoImage: {
//   width:65,
//   height: 60,
//   borderRadius: 6,
//   marginRight: 8,
// },
//   logoText: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "#2E7D32",
//   },

//   profileImage: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//   },

//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   text: {
//     fontSize: 22,
//     fontWeight: "700",
//   },
// });


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function ngoinfo() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: "https://i.imgur.com/8KZQZ6G.png" }}
            style={styles.appLogo}
          />
          <Text style={styles.appName}>AniResQ</Text>
        </View>

        <View style={styles.headerRight}>
          <Text style={styles.icon}>🔔</Text>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.profile}
          />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#777"
          style={styles.searchInput}
        />
      </View>

      {/* NGO Cards */}
      <View style={styles.cardsWrapper}>
        {ngoData.map((item, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: item.color }]}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />

            <View style={styles.cardTextWrap}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* bottom spacing */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

/* ================= NGO DATA ================= */

const ngoData = [
  {
    title: "Saahas For Animals",
    desc:
      "Transforming street animal lives in Pune. Your donation powers street animal rescues, year after year.",
    color: "#6B56A5",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "About Make a New Life, NGO in Pune",
    desc: "Every living being has right to live in this world",
    color: "#1FA543",
    image: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png",
  },
  {
    title: "Animal Rescue Trust, Pune",
    desc: "Together, we can save these precious animal",
    color: "#A624A6",
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209036.png",
  },
  {
    title: "People for Animals",
    desc: "Compassion without action is Evil",
    color: "#C1273D",
    image: "https://cdn-icons-png.flaticon.com/512/1076/1076928.png",
  },
  {
    title: "Sinhgad Animal Welfare Charitable Trust",
    desc: "We Rescue, Treat and Care for street animals",
    color: "#9DBA1C",
    image: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  },
];

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  appLogo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  appName: {
    fontSize: 20,
    fontWeight: "800",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  icon: {
    fontSize: 18,
  },

  profile: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  searchBox: {
    padding: 16,
  },

  searchInput: {
    height: 48,
    backgroundColor: "#E6E6E6",
    borderRadius: 24,
    paddingHorizontal: 18,
  },

  cardsWrapper: {
    paddingHorizontal: 16,
  },

  card: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    alignItems: "center",
  },

  cardImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#fff",
  },

  cardTextWrap: {
    flex: 1,
    marginLeft: 14,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },

  cardDesc: {
    color: "#fff",
    marginTop: 8,
    fontSize: 14,
  },
});