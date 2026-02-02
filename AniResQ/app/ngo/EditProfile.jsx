
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth_update_profile } from "../../Apiendpoint.jsx";

export default function EditProfile() {
  const params = useLocalSearchParams();
  const user = JSON.parse(params.user);

  // 🔹 STATES
  const [name, setName] = useState(user?.name || "");
  const [mobileno, setMobileno] = useState( user?.mobileno ? String(user.mobileno) : "");

  const [city, setCity] = useState(user?.address?.city || "");
  const [dist, setDist] = useState(user?.address?.dist || "");
  const [stateName, setStateName] = useState(user?.address?.state || "");
  const [aboutus, setAboutus] = useState(user?.aboutus || "");
  const [regiid,setRegiid]= useState(user?.regiid||"");
  const [mission,setMission]=useState(user?.mission||"");
  const [pickedImage, setPickedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ IMAGE PICK
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setPickedImage(result.assets[0]);
    }
  };

  // ✅ UPDATE PROFILE
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        Alert.alert("Login required");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("mobileno", mobileno);
      formData.append("address[city]", city);
      formData.append("address[dist]", dist);
      formData.append("address[state]", stateName);
      formData.append("aboutus", aboutus);
      formData.append("regiid",regiid);
      formData.append("mission",mission);

      if (pickedImage) {
        formData.append("image", {
          uri:
            Platform.OS === "android"
              ? pickedImage.uri
              : pickedImage.uri.replace("file://", ""),
          name: "profile.jpg",
          type: "image/jpeg",
        });
      }

      const res = await fetch(Auth_update_profile, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (!res.ok) {
        Alert.alert("Error", data.message || "Update failed");
        return;
      }

      Alert.alert("Success", "Profile updated successfully");
      router.back();
    } catch (err) {
      console.log("Update error:", err);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View >
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={26}
          color="black"
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* IMAGE */}
        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          <Image
            source={
              pickedImage?.uri
                ? { uri: pickedImage.uri }
                : user?.image
                ? { uri: user.image }
                : require("../../assets/image/profile.png")
            }
            style={styles.profileImg}
          />
          <Text style={styles.changeText}>Change Photo</Text>
        </TouchableOpacity>

        {/* INPUTS */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          value={mobileno}
          onChangeText={setMobileno}
          placeholder="Mobile"
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="City"
        />

        <TextInput
          style={styles.input}
          value={dist}
          onChangeText={setDist}
          placeholder="District"
        />

        <TextInput
          style={styles.input}
          value={stateName}
          onChangeText={setStateName}
          placeholder="State"
        />
         <TextInput
          style={styles.input}
          value={regiid}
          onChangeText={setRegiid}
          placeholder="Registration ID"
        />

        <TextInput
          style={[styles.input, styles.aboutInput]}
          value={aboutus}
          onChangeText={setAboutus}
          placeholder="About Us"
          multiline
        />

        <TextInput
          style={[styles.input, styles.aboutInput]}
          value={mission}
          onChangeText={setMission}
          placeholder="Our Mission"
          multiline
        />

        {/* SAVE BUTTON */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleUpdate}>
          <Text style={styles.saveText}>
            {loading ? "Saving..." : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop:20
  },
  headerTitle: { fontSize: 20, fontWeight: "800"},

  container: {
    backgroundColor: "rgba(15, 43, 143, 0.09)",
    borderRadius: 28,
    padding: 20,
    margin: 15,
  },

  imageWrapper: { alignItems: "center", marginBottom: 20 },
  profileImg: { width: 120, height: 120, borderRadius: 60 },
  changeText: { marginTop: 10, color: "#6b7cf6", fontWeight: "700" },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  aboutInput: {
    height: 100,
    textAlignVertical: "top",
  },

  saveBtn: {
    backgroundColor: "#6b7cf6",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom:70,
  },

  saveText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
