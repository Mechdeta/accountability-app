import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Accountability Tracker</Text>
      <Text>Stay motivated and complete your goals!</Text>
      <Button title="Start Now" onPress={() => router.push("/goals")} />
    </View>
  );
}
