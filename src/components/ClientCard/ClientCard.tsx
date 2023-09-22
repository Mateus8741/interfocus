import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

interface CardProps {
  name: string;
  cpf: string;
  email: string;
  debt: number;
}

export function ClientCard() {
  return (
    <View
      className="w-full bg-white rounded-lg px-4 py-3 mb-4"
      style={$shadowProps}>
      <Text className="text-contrast-300 text-lg font-Bold mb-2">
        Maria Helena de Rodrigues
      </Text>

      <View className="flex-row gap-x-2 mb-2">
        <Text className="text-text-200 text-sm font-Bold">CPF:</Text>

        <Text className="text-text-100 text-sm font-Regular">56640484846</Text>
      </View>

      <View className="flex-row gap-x-2">
        <Text className="text-text-200 text-sm font-Bold">E-mail::</Text>

        <Text className="text-text-100 text-sm font-Regular">
          maria.helena@gmail.com
        </Text>
      </View>

      <View className="flex-row justify-between items-center border-t border-gray-200 mt-2">
        <Text className="text-contrast-300 text-lg font-Bold">
          Valor da dívida:
        </Text>

        <Text className="text-text-200 text-sm font-Bold">R$ 743,55</Text>
      </View>
    </View>
  );
}

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 4 },
};
