// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';
// import { Auth_login } from '../../Apiendpoint.jsx';

// export default function Signin() {
//   const router = useRouter();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter email and password');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(Auth_login, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         Alert.alert('Login Failed', data.message || 'Invalid credentials');
//         return;
//       }

//       Alert.alert('Success', 'Login successful');

//       if (data.user.role === 'citizen') {
//         router.replace('/citizen/home');
//       } else if (data.user.role === 'ngo') {
//         router.replace('/ngo/home');
//       }

//     } catch (error) {
//       Alert.alert('Error', 'Server not reachable');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient colors={['#b3d1ff', '#e6f0ff']} style={styles.container}>
//       <Text style={styles.back} onPress={() => router.push('/')}>
//         ← Back to Home
//       </Text>

//       <View style={styles.card}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />

//         <Text
//           style={styles.forgot}
//           onPress={() => router.push('/auth/forgotpassword')}
//         >
//           Forgot Password?
//         </Text>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>
//             {loading ? 'Logging in...' : 'Login'}
//           </Text>
//         </TouchableOpacity>

//         <Text style={styles.signUpText}>
//           Don’t have an account?{' '}
//           <Text
//             style={styles.signUpLink}
//             onPress={() => router.push('/auth/signup')}
//           >
//             Sign Up
//           </Text>
//         </Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
//   back: { color: '#2563eb', fontSize: 14, marginBottom: 10 },
//   title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginTop: 10 },
//   subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
//   card: { backgroundColor: '#fff', borderRadius: 16, padding: 20, elevation: 5 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#d1d5db',
//     borderRadius: 10,
//     padding: 12,
//     marginTop: 10,
//   },

//   /* 🔹 Forgot password style */
//   forgot: {
//     textAlign: 'right',
//     color: '#2563eb',
//     marginTop: 6,
//     marginBottom: 10,
//     fontWeight: '500',
//   },

//   button: {
//     backgroundColor: '#2563eb',
//     padding: 14,
//     borderRadius: 12,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   signUpText: { textAlign: 'center', marginTop: 15, color: '#555' },
//   signUpLink: { color: '#2563eb', fontWeight: '600' },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth_login } from "../../Apiendpoint.jsx";

export default function Signin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(Auth_login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
        return;
      }

      // ✅ Save token and user info
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      Alert.alert("Success", "Login successful");

      // Navigate based on role
      if (data.user.role === "citizen") {
        router.replace("/citizen/home");
      } else if (data.user.role === "ngo") {
        router.replace("/ngo/home");
      }
    } catch (error) {
      Alert.alert("Error", "Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={["#b3d1ff", "#e6f0ff"]} style={styles.container}>
      <Text style={styles.back} onPress={() => router.push("/")}>
        ← Back to Home
      </Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text
          style={styles.forgot}
          onPress={() => router.push("/auth/forgotpassword")}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Don’t have an account?{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => router.push("/auth/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  back: { color: "#2563eb", fontSize: 14, marginBottom: 10 },
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 20, elevation: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  forgot: {
    textAlign: "right",
    color: "#2563eb",
    marginTop: 6,
    marginBottom: 10,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 16 },
  signUpText: { textAlign: "center", marginTop: 15, color: "#555" },
  signUpLink: { color: "#2563eb", fontWeight: "600" },
});
