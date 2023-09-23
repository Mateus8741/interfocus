import React from 'react';
import { Text, View } from 'react-native';

interface DetailsTextProps {
  label: string;
  value: string;
}

export function DetailsText({ label, value }: DetailsTextProps) {
  return (
    <View className="gap-y-2">
      <Text className="text-contrast-700 font-SemiBold">{label}</Text>
      <Text className="text-text-200 text-sm font-Regular">{value}</Text>
    </View>
  );
}
