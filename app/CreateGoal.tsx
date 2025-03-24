import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Correct import

const GoalsScreen = () => {
  const router = useRouter(); // ✅ Initialize router
  const [goals, setGoals] = useState<string[]>(['Learn React Native', 'Build an App']);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Goals Screen</Text>

      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ fontSize: 16, marginVertical: 5 }}>• {item}</Text>}
      />

      <Button title="Create Goal" onPress={() => router.push('./CreateGoal')} />
    </View>
  );
};

export default GoalsScreen;
