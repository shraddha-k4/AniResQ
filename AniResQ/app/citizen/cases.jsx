import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Auth_profile } from "../../Apiendpoint.jsx";

export default function Cases() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const res = await fetch(Auth_profile, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      console.log("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {/* 🔹 HEADER */}
      <View style={styles.header}>
        {/* Logo + Name */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/image/aniresq.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>AniResQ</Text>
        </View>

        {/* Profile Image from Backend */}
        <TouchableOpacity onPress={() => router.push("/citizen/profile")}>
          <Image
            source={
              user?.image
                ? { uri: user.image }
                : require("../../assets/image/profile.png")
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 🔹 BODY */}
      <View style={styles.container}>
        <Text style={styles.text}>Welcome citizen Cases</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },

  loader: {
    
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    // height: 70,
    // paddingHorizontal: 12,
    // backgroundColor: "white",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    // elevation: 4, // Android shadow
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:2,
    backgroundColor:"white",
     elevation: 4, // Android shadow
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoImage: {
  width:65,
  height: 60,
  borderRadius: 6,
  marginRight: 8,
},

  logoText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2E7D32",
  },

  profileImage: {
    width: 40,
    height: 40,
    marginRight:8,
    borderRadius: 19,
  },

  container: {
    
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    fontWeight: "700",
  },
});
