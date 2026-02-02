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
// import { Auth_signup } from '../../Apiendpoint.jsx';

// export default function Signup() {
//   const router = useRouter();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileno, setMobileno] = useState('');
//   const [role, setRole] = useState('citizen');
//   const [open, setOpen] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     // 🔐 VALIDATIONS
//     if (!name || !email || !mobileno || !password || !confirmPassword) {
//       Alert.alert('Error', 'All fields are required');
//       return;
//     }

//     if (!/^\d{10}$/.test(mobileno)) {
//       Alert.alert('Error', 'Mobile number must be exactly 10 digits');
//       return;
//     }

//     if (password.length < 8) {
//       Alert.alert('Error', 'Password must be at least 8 characters');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     setLoading(true);

//     try {
//       // ✅ EXACT BACKEND MATCH PAYLOAD
//       const signupData = {
//         name: name.trim(),
//         email: email.trim().toLowerCase(),
//         mobileno,
//         password,
//         role: role.toLowerCase(),
//       };

//       console.log('Signup Payload:', signupData);

//       const response = await fetch(Auth_signup, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(signupData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         Alert.alert('Signup Failed', data.message || 'Something went wrong');
//         return;
//       }

//       Alert.alert('Success', 'Account created successfully');

//       // ✅ ROLE BASED ROUTING (WORKING)
//       setTimeout(() => {
//         if (data.user.role === 'citizen') {
//           router.replace('/citizen/home');
//         } else if (data.user.role === 'ngo') {
//           router.replace('/ngo/home');
//         }
//       }, 300);

//     } catch (error) {
//       Alert.alert(
//         'Network Error',
//         'Server not reachable. Check IP & WiFi'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient colors={['#b3d1ff', '#e6f0ff']} style={styles.container}>
//       <Text style={styles.back} onPress={() => router.push('/')}>
//         ← Back to Home
//       </Text>

//       <Text style={styles.title}>Join Our Mission</Text>
//       <Text style={styles.subtitle}>
//         Choose your role in protecting animals
//       </Text>

//       <View style={styles.card}>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={name}
//           onChangeText={setName}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Email Address"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           value={mobileno}
//           onChangeText={setMobileno}
//           keyboardType="phone-pad"
//           maxLength={10}
//         />

//         <Text style={styles.label}>Select Role</Text>

//         <TouchableOpacity
//           style={styles.dropdown}
//           onPress={() => setOpen(!open)}
//         >
//           <Text style={styles.dropdownText}>{role}</Text>
//         </TouchableOpacity>

//         {open && (
//           <View style={styles.dropdownMenu}>
//             {['citizen', 'ngo'].map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 style={styles.dropdownItem}
//                 onPress={() => {
//                   setRole(item);
//                   setOpen(false);
//                 }}
//               >
//                 <Text style={styles.dropdownItemText}>{item}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />

//         <TouchableOpacity
//           style={[styles.button, loading && { opacity: 0.7 }]}
//           onPress={handleSignup}
//           disabled={loading}
//         >
//           <Text style={styles.buttonText}>
//             {loading ? 'Creating account...' : `Sign Up as ${role}`}
//           </Text>
//         </TouchableOpacity>

//         <Text style={styles.signInText}>
//           Already have an account?{' '}
//           <Text
//             style={styles.signInLink}
//             onPress={() => router.push('/auth/signin')}
//           >
//             Sign In
//           </Text>
//         </Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
//   back: { color: '#2563eb', fontSize: 14, marginBottom: 10 },
//   title: { fontSize: 28, fontWeight: '700', textAlign: 'center' },
//   subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
//   card: { backgroundColor: '#fff', borderRadius: 16, padding: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#d1d5db',
//     borderRadius: 10,
//     padding: 12,
//     marginTop: 10,
//   },
//   label: { marginTop: 15, fontWeight: '500' },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#d1d5db',
//     borderRadius: 10,
//     padding: 12,
//   },
//   dropdownMenu: {
//     borderWidth: 1,
//     borderColor: '#d1d5db',
//     borderRadius: 10,
//     marginTop: 5,
//     backgroundColor: '#fff',
//   },
//   dropdownItem: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   button: {
//     backgroundColor: '#2563eb',
//     padding: 14,
//     borderRadius: 12,
//     marginTop: 20,
//   },
//   buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
//   signInText: { textAlign: 'center', marginTop: 15 },
//   signInLink: { color: '#2563eb', fontWeight: '600' },
// });




import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth_signup } from '../../Apiendpoint.jsx';

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [role, setRole] = useState('citizen');
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    // 🔐 VALIDATIONS
    if (!name || !email || !mobileno || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!/^\d{10}$/.test(mobileno)) {
      Alert.alert('Error', 'Mobile number must be exactly 10 digits');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // ✅ EXACT BACKEND MATCH PAYLOAD
      const signupData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        mobileno,
        password,
        role: role.toLowerCase(),
      };

      console.log('Signup Payload:', signupData);

      const response = await fetch(Auth_signup, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Signup Failed', data.message || 'Something went wrong');
        return;
      }

      // ✅ Save token & user info to AsyncStorage
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));

      Alert.alert('Success', 'Account created successfully');

      // ✅ ROLE BASED ROUTING
      setTimeout(() => {
        if (data.user.role === 'citizen') {
          router.replace('/citizen/home');
        } else if (data.user.role === 'ngo') {
          router.replace('/ngo/home');
        }
      }, 300);

    } catch (error) {
      Alert.alert(
        'Network Error',
        'Server not reachable. Check IP & WiFi'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#b3d1ff', '#e6f0ff']} style={styles.container}>
      <Text style={styles.back} onPress={() => router.push('/')}>
        ← Back to Home
      </Text>

      <Text style={styles.title}>Join Our Mission</Text>
      <Text style={styles.subtitle}>
        Choose your role in protecting animals
      </Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileno}
          onChangeText={setMobileno}
          keyboardType="phone-pad"
          maxLength={10}
        />

        <Text style={styles.label}>Select Role</Text>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen(!open)}
        >
          <Text style={styles.dropdownText}>{role}</Text>
        </TouchableOpacity>

        {open && (
          <View style={styles.dropdownMenu}>
            {['citizen', 'ngo'].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setRole(item);
                  setOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleSignup}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Creating account...' : `Sign Up as ${role}`}
          </Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text
            style={styles.signInLink}
            onPress={() => router.push('/auth/signin')}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  back: { color: '#2563eb', fontSize: 14, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  label: { marginTop: 15, fontWeight: '500' },
  dropdown: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
  },
  dropdownMenu: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  signInText: { textAlign: 'center', marginTop: 15 },
  signInLink: { color: '#2563eb', fontWeight: '600' },
});
