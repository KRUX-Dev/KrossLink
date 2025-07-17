import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: "Page Not Found" }}
      />

      <View>
        <Text style={{ color: '#fff' }}>
          The page you are looking for does not exist.
        </Text>

        <Link href="/" style={styles.link}>
            Go back to Home
        </Link>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});