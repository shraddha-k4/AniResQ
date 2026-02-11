// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useRouter } from "expo-router";

// export default function Home() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#6b7cf6" }}>
//       <ScrollView contentContainerStyle={styles.container}>

//                 {/* Header */}
//                 <View style={styles.header}>
//                 <View style={styles.logoContainer}>
//                   <Image
//                     source={require("../../../assets/aniresq.png")}
//                     style={styles.logoImage}
//                   />
//                   <Text style={styles.logo}>AniResQ</Text>
//                 </View>
        
//                   {/* Profile Avatar */}
//                   <TouchableOpacity onPress={() => router.push("/citizen/profile")}>
//                     <Image
//                       source={
//                         user?.image
//                           ? { uri: user.image } // ✅ backend image
//                           : require("../../../assets/image/profile.png")
//                       }
//                       style={styles.profileImage}
//                     />
//                   </TouchableOpacity>
//                 </View>
//         <View style={styles.headerCard}>
          
//           <Text style={styles.title}>Saahas For Animals</Text>
//           <Text style={styles.welcome}>Welcome Back!</Text>
//           <Text style={styles.subtitle}>
//             Together we're making a difference in our community
//           </Text>
//         </View>

//         <View style={styles.statCard}>
//           <Text style={styles.statNo}>0</Text>
//           <Text style={styles.statText}>Total Cases Undertaken</Text>
//         </View>

//         <View style={styles.statCard}>
//           <Text style={styles.statNo}>0</Text>
//           <Text style={styles.statText}>Successfully Completed</Text>
//         </View>

//         <View style={styles.statCard}>
//           <Text style={styles.statNo}>0</Text>
//           <Text style={styles.statText}>Currently Ongoing</Text>
//         </View>

//         <Image
//           source={{ uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800" }}
//           style={styles.bigImage}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 16 },
//    header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding:2,
//     backgroundColor:"white",
//      elevation: 4, // Android shadow
//   },

//   logo: { fontSize:10, fontWeight: "800", color: "#2E7D32" },

//   profileImage: { width: 40, height:40, borderRadius: 19,marginRight:8 },

//   headerCard: { backgroundColor: '#8f9cf7', borderRadius: 20, padding: 20, marginBottom: 16 },
//   //logo: { width: 45, height: 45, borderRadius: 22, marginBottom: 10 },
//   title: { color: '#fff', fontSize: 22, fontWeight: '700' },
//   welcome: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 10 },
//   subtitle: { color: '#eef', marginTop: 6 },
//   statCard: { backgroundColor: '#9aa6f9', borderRadius: 18, padding: 20, marginBottom: 12 },
//   statNo: { fontSize: 36, fontWeight: '800', color: '#fff' },
//   statText: { color: '#eef' },
//   row: { flexDirection: 'row', justifyContent: 'space-between' },
//   smallCard: { backgroundColor: '#fff', width: '48%', borderRadius: 18, padding: 16 },
//   icon: { width: 36, height: 36, marginBottom: 10 },
//   cardTitle: { fontWeight: '700', fontSize: 16 },
//   cardSub: { color: 'gray' },
//   bigImage: { width: '100%', height: 200, borderRadius: 20, marginVertical: 16 },
//   section: { fontSize: 20, fontWeight: '700', marginBottom: 10, color: '#fff' },
//   activity: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 10 },
//   actTitle: { fontWeight: '700' },
//   actSub: { color: 'gray' },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   pageText: { fontSize: 22, fontWeight: '700' },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  // temporary user state (replace with API later)
  const [user] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2434b1" }}>
      {/* <ScrollView contentContainerStyle={styles.container}> */}

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/aniresq.png")}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>AniResQ</Text>
          </View>

          <TouchableOpacity onPress={() => router.push("/citizen/profile")}>
            <Image
              source={
                user?.image
                  ? { uri: user.image }
                  : require("../../../assets/image/profile.png")
              }
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Welcome Card */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>Saahas For Animals</Text>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Together we're making a difference in our community
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statCard}>
          <Text style={styles.statNo}>0</Text>
          <Text style={styles.statText}>Total Cases Undertaken</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNo}>0</Text>
          <Text style={styles.statText}>Successfully Completed</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNo}>0</Text>
          <Text style={styles.statText}>Currently Ongoing</Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
          }}
          style={styles.bigImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    elevation: 1,
    backgroundColor: "#2434b1",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoImage: {
    width: 70,
    height:60,
    marginRight: 8,
  },

  logoText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#f0f4f0",
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  headerCard: {
    backgroundColor: "#8f9cf7",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },

  title: { color: "#fff", fontSize: 22, fontWeight: "700" },
  welcome: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 10,
  },
  subtitle: { color: "#eef", marginTop: 6 },

  statCard: {
    backgroundColor: "#9aa6f9",
    borderRadius: 18,
    padding: 20,
    marginBottom: 12,
  },

  statNo: { fontSize: 36, fontWeight: "800", color: "#fff" },
  statText: { color: "#eef" },

  bigImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginVertical: 16,
  },
});
