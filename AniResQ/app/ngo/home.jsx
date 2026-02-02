import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6b7cf6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          
          <Text style={styles.title}>Saahas For Animals</Text>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Together we're making a difference in our community
          </Text>
        </View>

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
          source={{ uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800" }}
          style={styles.bigImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  headerCard: { backgroundColor: '#8f9cf7', borderRadius: 20, padding: 20, marginBottom: 16 },
  logo: { width: 45, height: 45, borderRadius: 22, marginBottom: 10 },
  title: { color: '#fff', fontSize: 22, fontWeight: '700' },
  welcome: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 10 },
  subtitle: { color: '#eef', marginTop: 6 },
  statCard: { backgroundColor: '#9aa6f9', borderRadius: 18, padding: 20, marginBottom: 12 },
  statNo: { fontSize: 36, fontWeight: '800', color: '#fff' },
  statText: { color: '#eef' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  smallCard: { backgroundColor: '#fff', width: '48%', borderRadius: 18, padding: 16 },
  icon: { width: 36, height: 36, marginBottom: 10 },
  cardTitle: { fontWeight: '700', fontSize: 16 },
  cardSub: { color: 'gray' },
  bigImage: { width: '100%', height: 200, borderRadius: 20, marginVertical: 16 },
  section: { fontSize: 20, fontWeight: '700', marginBottom: 10, color: '#fff' },
  activity: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 10 },
  actTitle: { fontWeight: '700' },
  actSub: { color: 'gray' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pageText: { fontSize: 22, fontWeight: '700' },
});