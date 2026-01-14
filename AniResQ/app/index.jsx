

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// import { router } from "expo-router";
// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       {/* Scrollable Content */}
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
        
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.logo}>AniResQ</Text>

//           {/* Profile Avatar */}
//           <TouchableOpacity>
//             <Image
//               source={{ uri: "https://i.pravatar.cc/150?img=12" }}
//               style={styles.profileImage}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Welcome Card */}
//         <View style={styles.welcomeCard}>
//           <Text style={styles.welcomeTitle}>Welcome, Sarah 👋</Text>
//           <Text style={styles.welcomeText}>
//             Together we can make a difference for animals in need.
//             Report, track, and help create a safer world for wildlife.
//           </Text>
//         </View>

//         {/* Action Cards */}
//         <TouchableOpacity style={styles.actionCard} onPress={() => router.push("/report")}>
//           <MaterialIcons name="report-problem" size={28} color="#E53935" />
//           <View style={styles.actionText}>
//             <Text style={styles.actionTitle}>Report Animal Abuse</Text>
//             <Text style={styles.actionSub}>Help animals in distress</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionCard}>
//           <Ionicons name="alert-circle" size={28} color="#FB8C00" />
//           <View style={styles.actionText}>
//             <Text style={styles.actionTitle}>Wildlife Alerts</Text>
//             <Text style={styles.actionSub}>
//               Stay informed about nearby wildlife
//             </Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionCard}>
//           <Ionicons name="time-outline" size={28} color="#1E88E5" />
//           <View style={styles.actionText}>
//             <Text style={styles.actionTitle}>Report History</Text>
//             <Text style={styles.actionSub}>
//               Track your submitted reports
//             </Text>
//           </View>
//         </TouchableOpacity>

//         {/* Recent Cases */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Recent Cases</Text>
//           <Text style={styles.viewAll}>View All</Text>
//         </View>

//         <View style={styles.caseCard}>
//           <Image
//             source={{ uri: "https://images.unsplash.com/photo-1558788353-f76d92427f16" }}
//             style={styles.caseImage}
//           />
//           <View style={styles.caseText}>
//             <Text style={styles.caseTitle}>Injured Stray Dog</Text>
//             <Text style={styles.caseSub}>Reported by John • 2 hours ago</Text>
//             <Text style={styles.inProgress}>● In Progress</Text>
//           </View>
//         </View>

//         <View style={styles.caseCard}>
//           <Image
//             source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }}
//             style={styles.caseImage}
//           />
//           <View style={styles.caseText}>
//             <Text style={styles.caseTitle}>Cat Rescue Success</Text>
//             <Text style={styles.caseSub}>Reported by Maria • 1 day ago</Text>
//             <Text style={styles.resolved}>● Resolved</Text>
//           </View>
//         </View>

//         {/* NGO Updates */}
//         <Text style={[styles.sectionTitle, { marginLeft: 16 }]}>
//           NGO Updates
//         </Text>

//         <View style={styles.ngoCard}>
//           <FontAwesome5 name="heart" size={22} color="#2E7D32" />
//           <View style={{ marginLeft: 12 }}>
//             <Text style={styles.ngoTitle}>Animal Welfare NGO</Text>
//             <Text style={styles.ngoText}>
//               We’ve successfully rescued 15 animals this week.
//               Thanks to all volunteers & supporters.
//             </Text>
//             <Text style={styles.ngoStats}>❤️ 24   💬 8</Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <NavItem icon="home" label="Home" active />
//         <NavItem icon="document-text-outline" label="Cases" />
//         <NavItem icon="people-outline" label="NGOs" />
//         <NavItem
//   icon="person-outline"
//   label="Profile"
//   onPress={() => router.push("/profile")}
// />

//       </View>
//     </View>
//   );
// }

// /* Bottom Nav Item Component */
// const NavItem = ({ icon, label, active, onPress }) => (
//   <TouchableOpacity style={styles.navItem} onPress={onPress}>
//     <Ionicons
//       name={icon}
//       size={26}
//       color={active ? "#2E7D32" : "#777"}
//     />
//     <Text style={[styles.navLabel, active && { color: "#2E7D32" }]}>
//       {label}
//     </Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F7FA",
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//   },

//   logo: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "#2E7D32",
//   },

//   profileImage: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//   },

//   welcomeCard: {
//     backgroundColor: "#2E7D32",
//     margin: 16,
//     borderRadius: 14,
//     padding: 18,
//   },

//   welcomeTitle: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "700",
//   },

//   welcomeText: {
//     color: "#E8F5E9",
//     marginTop: 8,
//     fontSize: 14,
//     lineHeight: 20,
//   },

//   actionCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     marginHorizontal: 16,
//     marginBottom: 14,
//     padding: 18,
//     borderRadius: 12,
//     elevation: 3,
//   },

//   actionText: {
//     marginLeft: 14,
//   },

//   actionTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   actionSub: {
//     color: "#777",
//     fontSize: 13,
//     marginTop: 2,
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginHorizontal: 16,
//     marginTop: 20,
//   },

//   sectionTitle: {
//     fontWeight: "700",
//     fontSize: 17,
//   },

//   viewAll: {
//     color: "#2E7D32",
//     fontSize: 14,
//   },

//   caseCard: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginHorizontal: 16,
//     marginTop: 14,
//     borderRadius: 12,
//     overflow: "hidden",
//   },

//   caseImage: {
//     width: 90,
//     height: 90,
//   },

//   caseText: {
//     padding: 12,
//     flex: 1,
//   },

//   caseTitle: {
//     fontWeight: "600",
//     fontSize: 15,
//   },

//   caseSub: {
//     fontSize: 13,
//     color: "#777",
//     marginTop: 2,
//   },

//   inProgress: {
//     color: "#FB8C00",
//     fontSize: 13,
//     marginTop: 6,
//   },

//   resolved: {
//     color: "#2E7D32",
//     fontSize: 13,
//     marginTop: 6,
//   },

//   ngoCard: {
//     flexDirection: "row",
//     backgroundColor: "#E8F5E9",
//     margin: 16,
//     padding: 16,
//     borderRadius: 12,
//   },

//   ngoTitle: {
//     fontWeight: "700",
//     fontSize: 15,
//   },

//   ngoText: {
//     fontSize: 13,
//     marginTop: 6,
//     color: "#555",
//     lineHeight: 18,
//   },

//   ngoStats: {
//     fontSize: 13,
//     marginTop: 8,
//     color: "#444",
//   },

//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: 70,
//     backgroundColor: "#fff",
//     borderTopWidth: 0.5,
//     borderColor: "#ddd",
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//   },

//   navItem: {
//     alignItems: "center",
//   },

//   navLabel: {
//     fontSize: 12,
//     color: "#777",
//     marginTop: 4,
//   },
// });




import { 
  View, Text, StyleSheet, Image, Pressable, ScrollView, TextInput, TouchableOpacity, Alert, Platform 
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";

export default function Index() {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log({ name, email, message });
    Alert.alert("Message Sent!", "This is a demo. Backend is not connected.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* ================= WHITE HEADER ================= */}
      <View style={styles.whiteHeader}>
        <View style={styles.logoRow}>
          <Image
            source={require("../assets/image/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerLogoText}>AniResQ</Text>
        </View>

        <Pressable
          style={styles.getStarted}
          onPress={() => router.push("/auth/signup")}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </Pressable>
      </View>

      {/* ================= BLUE HERO SECTION ================= */}
      <View style={styles.blueContainer}>
        <Text style={styles.title}>
          Protecting Every Paw,{"\n"}Saving Every Life
        </Text>

        <Text style={styles.desc}>
          Join the movement to end animal abuse. Report, rescue, and restore hope
          for animals in need through our community-driven platform.
        </Text>

        <View style={styles.card}>
          <Image
            source={require("../assets/image/landing.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.quote}>
            “Every animal deserves a voice. Be theirs.”
          </Text>
        </View>

        <Pressable
          style={styles.cta}
          onPress={() => router.push("/features")}
        >
          <Text style={styles.ctaText}>Start Saving Lives</Text>
        </Pressable>
      </View>

      {/* ================= WHY SECTION ================= */}
      <View style={styles.whySection}>
        <Text style={styles.whyTitle}>Why SentinelSense?</Text>

        <View style={styles.whyCard}>
          <View style={[styles.iconBox, { backgroundColor: "#E0EAFF" }]}><Text style={styles.icon}>⚡</Text></View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Rapid Response</Text>
            <Text style={styles.cardDesc}>
              AI-powered detection ensures immediate alerts to nearby NGOs and rescue teams.
            </Text>
          </View>
        </View>

        <View style={styles.whyCard}>
          <View style={[styles.iconBox, { backgroundColor: "#E6F8F0" }]}><Text style={styles.icon}>👥</Text></View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Community Driven</Text>
            <Text style={styles.cardDesc}>
              Connect citizens with verified NGOs creating a strong rescue network.
            </Text>
          </View>
        </View>

        <View style={styles.whyCard}>
          <View style={[styles.iconBox, { backgroundColor: "#FFF3E0" }]}><Text style={styles.icon}>📊</Text></View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Track Impact</Text>
            <Text style={styles.cardDesc}>
              Real-time updates show the difference you're making.
            </Text>
          </View>
        </View>
      </View>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <View style={styles.howSection}>
        <Text style={styles.howTitle}>How It Works</Text>

        {[1, 2, 3, 4].map((step) => (
          <View key={step} style={styles.howCard}>
            <View style={styles.numberCircle}><Text style={styles.numberText}>{step}</Text></View>
            <View style={styles.howText}>
              <Text style={styles.cardTitle}>
                {step === 1 ? "Report" : step === 2 ? "Alert" : step === 3 ? "Rescue" : "Follow"}
              </Text>
              <Text style={styles.cardDesc}>
                {step === 1
                  ? "Snap a photo or video of animal abuse/distress"
                  : step === 2
                  ? "Alerts nearby verified NGOs instantly"
                  : step === 3
                  ? "Professional teams respond and provide necessary care"
                  : "Track recovery progress and celebrate success stories"}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* ================= RECENT RESCUES SECTION ================= */}
      <View style={styles.rescueSection}>
        <Text style={styles.rescueTitle}>Recent Rescues</Text>

        <View style={styles.rescueCard}>
          <Image
            source={require("../assets/image/dog-before-after.jpg")}
            style={styles.rescueImage}
            resizeMode="cover"
          />
          <View style={styles.rescueText}>
            <Text style={styles.rescueCardTitle}>Bella's Second Chance</Text>
            <Text style={styles.rescueDesc}>
              Rescued from neglect, now thriving with loving family
            </Text>
            <View style={styles.rescueFooter}>
              <Text style={styles.reportedBy}>Reported by: Sarah M.</Text>
              <Text style={styles.timeAgo}>2 days ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.rescueCard}>
          <Image
            source={require("../assets/image/sparrow-rescue.jpg")}
            style={styles.rescueImage}
            resizeMode="contain"
          />
          <View style={styles.rescueText}>
            <Text style={styles.rescueCardTitle}>Phoenix Takes Flight</Text>
            <Text style={styles.rescueDesc}>
              Injured sparrow fully recovered and released
            </Text>
            <View style={styles.rescueFooter}>
              <Text style={styles.reportedBy}>Reported by: Mike R.</Text>
              <Text style={styles.timeAgo}>1 week ago</Text>
            </View>
          </View>
        </View>
      </View>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <View style={styles.testimonialSection}>
        <Text style={styles.testimonialTitle}>What Our Heroes Say</Text>

        <View style={styles.testimonialCard}>
          <Image
            source={require("../assets/image/doc1.jpg")}
            style={styles.testimonialAvatar}
            resizeMode="contain"
          />
          <View style={styles.testimonialText}>
            <Text style={styles.testimonialName}>Dr. Emily Chen</Text>
            <Text style={styles.testimonialRole}>Animal Welfare NGO</Text>
            <Text style={styles.testimonialQuote}>
              "SentinalSense has revolutionized our response time. We've saved 40% more animals since joining the platform."
            </Text>
          </View>
        </View>

        <View style={styles.testimonialCard}>
          <Image
            source={require("../assets/image/doc2.jpg")}
            style={styles.testimonialAvatar}
            resizeMode="contain"
          />
          <View style={styles.testimonialText}>
            <Text style={styles.testimonialName}>James Wilson</Text>
            <Text style={styles.testimonialRole}>Concerned Citizen</Text>
            <Text style={styles.testimonialQuote}>
              "Finally, a way to make a real difference. I've helped rescue 3 animals in my neighborhood."
            </Text>
          </View>
        </View>
      </View>

      {/* ================= GET IN TOUCH SECTION ================= */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Get In Touch</Text>

        <View style={styles.contactInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={20} color="#1a1a1a" />
            <Text style={styles.infoText}>support@sentinalsense.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color="#1a1a1a" />
            <Text style={styles.infoText}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#1a1a1a" />
            <Text style={styles.infoText}>24/7 Emergency Hotline</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Your Message"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* ================= COMMON STYLES ================= */
  whiteHeader: { backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 50, paddingBottom: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  logoRow: { flexDirection: "row", alignItems: "center" },
  logo: { width: 34, height: 34 },
  headerLogoText: { color: "#111827", fontSize: 18, fontWeight: "700", marginLeft: 8 },
  getStarted: { backgroundColor: "#2563EB", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8 },
  getStartedText: { color: "#fff", fontWeight: "600" },
  blueContainer: { backgroundColor: "#2563EB", padding: 20 },
  title: { marginTop: 30, color: "#fff", fontSize: 28, fontWeight: "800", textAlign: "center" },
  desc: { marginTop: 16, color: "#E5E7EB", fontSize: 15, textAlign: "center", lineHeight: 22 },

  /* ================= CARD SHADOW FIX ================= */
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 28,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.08, shadowRadius: 6 },
      android: { elevation: 3 },
      web: { boxShadow: "0px 3px 6px rgba(0,0,0,0.08)" },
    }),
  },

  image: { width: "100%", height: 210, borderRadius: 14 },
  quote: { color: "#D1D5DB", marginTop: 12, fontStyle: "italic", textAlign: "center" },
  cta: { marginTop: 30, backgroundColor: "#F59E0B", paddingVertical: 14, borderRadius: 14 },
  ctaText: { textAlign: "center", fontWeight: "bold", fontSize: 16, color: "#000" },

  whySection: { backgroundColor: "#fff", padding: 20, paddingTop: 40 },
  whyTitle: { textAlign: "center", fontSize: 24, fontWeight: "800", marginBottom: 30 },
  whyCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    marginBottom: 18,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4 },
      android: { elevation: 2 },
      web: { boxShadow: "0px 2px 4px rgba(0,0,0,0.08)" },
    }),
  },
  iconBox: { width: 44, height: 44, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 14 },
  icon: { fontSize: 20 },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  cardDesc: { fontSize: 14, color: "#6B7280", lineHeight: 20 },

  howSection: { backgroundColor: "#F9FAFB", padding: 20, paddingTop: 40 },
  howTitle: { textAlign: "center", fontSize: 24, fontWeight: "800", marginBottom: 30 },
  howCard: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
  numberCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#2563EB", justifyContent: "center", alignItems: "center", marginRight: 14 },
  numberText: { color: "#fff", fontWeight: "700" },
  howText: { flex: 1 },

  rescueSection: { padding: 20, backgroundColor: "#fff", paddingBottom: 40 },
  rescueTitle: { fontSize: 24, fontWeight: "800", textAlign: "center", marginBottom: 20 },
  rescueCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4 },
      android: { elevation: 2 },
      web: { boxShadow: "0px 2px 4px rgba(0,0,0,0.08)" },
    }),
  },
  rescueImage: { width: "100%", height: 200 },
  rescueText: { padding: 12 },
  rescueCardTitle: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  rescueDesc: { fontSize: 14, color: "#6B7280", marginBottom: 8 },
  rescueFooter: { flexDirection: "row", justifyContent: "space-between" },
  reportedBy: { fontSize: 12, color: "#9CA3AF" },
  timeAgo: { fontSize: 12, color: "#9CA3AF" },

  testimonialSection: { padding: 20, backgroundColor: "#F5F8FC", paddingBottom: 40 },
  testimonialTitle: { fontSize: 24, fontWeight: "800", textAlign: "center", marginBottom: 20 },
  testimonialCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4 },
      android: { elevation: 2 },
      web: { boxShadow: "0px 2px 4px rgba(0,0,0,0.08)" },
    }),
  },
  testimonialAvatar: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  testimonialText: { flex: 1 },
  testimonialName: { fontWeight: "700", fontSize: 16, color: "#111827" },
  testimonialRole: { fontSize: 14, color: "#6B7280", marginBottom: 8 },
  testimonialQuote: { fontSize: 14, color: "#374151" },

  contactSection: { padding: 20, backgroundColor: "#fff", paddingBottom: 40 },
  contactTitle: { fontSize: 24, fontWeight: "800", textAlign: "center", marginBottom: 20 },
  contactInfo: { marginBottom: 20 },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  infoText: { marginLeft: 10, fontSize: 16, color: "#1a1a1a" },
  formContainer: {},
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 15, fontSize: 16, backgroundColor: "#f9f9f9" },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
