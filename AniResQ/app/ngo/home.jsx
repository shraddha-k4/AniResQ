import { View, Text, StyleSheet } from 'react-native';

export default function NgoHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome NGO Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});
