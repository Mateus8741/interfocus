import React from 'react';
import { Text, View } from 'react-native';
import { $shadowProps } from '../ClientCard/ClientCard';

interface SummaryCardProps {
  Qtd: number;
  Value: number;
}

export function SummaryCard() {
  return (
    <View
      className="w-full bg-white rounded-lg px-4 py-3 mb-4"
      style={$shadowProps}>
      <Text className="text-contrast-300 text-lg font-Bold mb-2">
        Dívidas em aberto
      </Text>

      <View className="flex-row justify-between gap-x-2 mb-2">
        <Text className="text-text-200 text-sm font-Bold">Qtde:</Text>

        <Text className="text-text-100 text-sm font-Regular">32</Text>
      </View>

      <View className="flex-row justify-between gap-x-2">
        <Text className="text-text-200 text-sm font-Bold">Valor total:</Text>

        <Text className="text-text-100 text-sm font-Regular">R$ 43.243,09</Text>
      </View>
    </View>
  );
}
