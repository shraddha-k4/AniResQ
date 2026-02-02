// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { useEffect, useRef, useState } from 'react';
// import { useRouter } from 'expo-router';
// import {
//   Auth_forgotpassword,
//   Auth_verifyotp,
// } from '../../Apiendpoint.jsx';
// import Toast from 'react-native-toast-message';

// export default function ForgotPassword() {
//   const router = useRouter();

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [timer, setTimer] = useState(30);

//   const inputs = useRef([]);

//   // ⏳ OTP resend timer
//   useEffect(() => {
//     if (!otpSent || timer === 0) return;
//     const interval = setInterval(() => {
//       setTimer((t) => t - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [otpSent, timer]);

//   const showToast = (type, title, message) => {
//     Toast.show({
//       type,
//       text1: title,
//       text2: message,
//       position: 'top',
//       visibilityTime: 2500,
//     });
//   };

//   // 📩 SEND OTP
//   const sendOtp = async () => {
//     if (!email) {
//       return showToast('error', 'Error', 'Please enter email');
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(Auth_forgotpassword, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         return showToast('error', 'Error', data.message || 'OTP failed');
//       }

//       showToast('success', 'OTP Sent', data.message || 'Check your email');
//       setOtpSent(true);
//       setTimer(30);
//     } catch (err) {
//       showToast('error', 'Error', 'Server not reachable');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ VERIFY OTP → LOGIN
//   const verifyOtp = async () => {
//     const finalOtp = otp.join('');

//     if (finalOtp.length !== 6) {
//       return showToast('error', 'Invalid OTP', 'Enter 6 digit OTP');
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(Auth_verifyotp, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email,
//           otp: finalOtp,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         return showToast('error', 'Invalid OTP', data.message);
//       }

//       /**
//        * ✅ BACKEND SHOULD RETURN:
//        * {
//        *   token: "JWT_TOKEN",
//        *   user: { role: "citizen" | "ngo" }
//        * }
//        */

//       // 🔐 store token later (AsyncStorage / SecureStore)
//       // await AsyncStorage.setItem('token', data.token);

//       showToast('success', 'Login Success', 'Welcome back');

//       setTimeout(() => {
//         if (data.user.role === 'citizen') {
//           router.replace('/citizen/home');
//         } else if (data.user.role === 'ngo') {
//           router.replace('/ngo/home');
//         } else {
//           router.replace('/');
//         }
//       }, 800);
//     } catch (err) {
//       showToast('error', 'Error', 'Server not reachable');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <Text style={styles.subtitle}>Login using OTP</Text>

//       {/* EMAIL */}
//       <TextInput
//         style={styles.emailInput}
//         placeholder="Enter email"
//         value={email}
//         onChangeText={setEmail}
//         editable={!otpSent}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       {/* OTP INPUT */}
//       {otpSent && (
//         <>
//           <View style={styles.otpRow}>
//             {otp.map((d, i) => (
//               <TextInput
//                 key={i}
//                 ref={(r) => (inputs.current[i] = r)}
//                 style={styles.otpBox}
//                 maxLength={1}
//                 keyboardType="numeric"
//                 value={d}
//                 onChangeText={(v) => handleOtpChange(v, i)}
//               />
//             ))}
//           </View>

//           <Text style={styles.timerText}>
//             Resend OTP in {timer}s
//           </Text>
//         </>
//       )}

//       {/* BUTTON */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={otpSent ? verifyOtp : sendOtp}
//         disabled={loading}
//       >
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>
//             {otpSent ? 'VERIFY & LOGIN' : 'SEND OTP'}
//           </Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     marginBottom: 6,
//     color: '#0f172a',
//   },
//   subtitle: {
//     color: '#64748b',
//     marginBottom: 20,
//   },
//   emailInput: {
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 14,
//     marginBottom: 20,
//   },
//   otpRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   otpBox: {
//     width: 46,
//     height: 52,
//     borderWidth: 1,
//     borderRadius: 8,
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   timerText: {
//     color: '#64748b',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#2563eb',
//     paddingVertical: 15,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700',
//   },
// });



import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth_forgotpassword, Auth_verifyotp } from "../../Apiendpoint.jsx";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);

  const inputs = useRef([]);

  // OTP timer
  useEffect(() => {
    if (!otpSent || timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Send OTP
  const sendOtp = async () => {
    if (!email) {
      return Alert.alert("Error", "Please enter email");
    }

    setLoading(true);
    try {
      const res = await fetch(Auth_forgotpassword, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        return Alert.alert("Error", data.message || "OTP failed");
      }

      Alert.alert("OTP Sent", data.message || "Check your email");
      setOtpSent(true);
      setTimer(30);
    } catch (err) {
      Alert.alert("Error", "Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      return Alert.alert("Invalid OTP", "Enter 6 digit OTP");
    }

    setLoading(true);
    try {
      const res = await fetch(Auth_verifyotp, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: finalOtp }),
      });
      const data = await res.json();

      if (!res.ok) {
        return Alert.alert("Invalid OTP", data.message);
      }

      // Save token & user (like Signin)
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      Alert.alert("Success", "Login successful");

      setTimeout(() => {
        if (data.user.role === "citizen") {
          router.replace("/citizen/home");
        } else if (data.user.role === "ngo") {
          router.replace("/ngo/home");
        } else {
          router.replace("/");
        }
      }, 300);
    } catch (err) {
      Alert.alert("Error", "Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <LinearGradient colors={["#b3d1ff", "#e6f0ff"]} style={styles.container}>
      <Text style={styles.back} onPress={() => router.push("/")}>
        ← Back to Home
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Login using OTP</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          editable={!otpSent}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* OTP Inputs */}
        {otpSent && (
          <View style={styles.otpRow}>
            {otp.map((d, i) => (
              <TextInput
                key={i}
                ref={(r) => (inputs.current[i] = r)}
                style={styles.otpBox}
                maxLength={1}
                keyboardType="numeric"
                value={d}
                onChangeText={(v) => handleOtpChange(v, i)}
              />
            ))}
          </View>
        )}

        {otpSent && <Text style={styles.timerText}>Resend OTP in {timer}s</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={otpSent ? verifyOtp : sendOtp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              {otpSent ? "VERIFY & LOGIN" : "SEND OTP"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  back: { color: "#2563eb", fontSize: 14, marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  subtitle: { color: "#555", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  otpRow: {
  flexDirection: "row",
  justifyContent: "center", // center the boxes in the card
  marginBottom: 12,
  gap: 0, // only works on RN 0.71+; otherwise use margin
},
otpBox: {
  width: 46,
  height: 52,
  borderWidth: 1,
  borderRadius: 10,
  textAlign: "center",
  fontSize: 20,
  marginHorizontal: 3, // remove if using gap
},

  timerText: { color: "#64748b", marginBottom: 12 },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 16 },
});
