import { Header } from '@components';
import React from 'react';
import { Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Header title="Clientes" />
      <Text className="text-secondary">Home</Text>
    </View>
  );
}
