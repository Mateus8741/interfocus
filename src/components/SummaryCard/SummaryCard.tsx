import React from 'react';
import { Text, View } from 'react-native';
import { $shadowProps } from '../ClientCard/ClientCard';

interface SummaryCardProps {
  valor: number;
}

export function SummaryCard({ valor }: SummaryCardProps) {
  const formattedDebt = valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <View
      className="w-full bg-white rounded-lg px-4 py-3 mb-4"
      style={$shadowProps}>
      <Text className="text-contrast-300 text-lg font-Bold mb-2">
        Dívidas em aberto
      </Text>

      <View className="flex-row justify-between gap-x-2 mb-2">
        <Text className="text-text-200 text-sm font-Bold">Qtde:</Text>

        <Text className="text-text-100 text-sm font-Regular">
          {valor.toString.length}
        </Text>
      </View>

      <View className="flex-row justify-between gap-x-2">
        <Text className="text-text-200 text-sm font-Bold">Valor total:</Text>

        <Text className="text-text-100 text-sm font-Regular">
          R$ {formattedDebt}
        </Text>
      </View>
    </View>
  );
}
