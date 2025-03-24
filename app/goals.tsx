import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { router } from 'expo-router';

const GoalsScreen = () => {
  const [goals, setGoals] = useState<string[]>(['Learn React Native', 'Build an App']);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Goals Screen</Text>

      {/* List of Goals */}
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ fontSize: 16, marginVertical: 5 }}>• {item}</Text>}
      />

      {/* Button to Navigate to Create Goal */}
      <Button title="Create Goal" onPress={() => router.push('/CreateGoal')} />
    </View>
  );
};

export default GoalsScreen;
console.log("rendering");