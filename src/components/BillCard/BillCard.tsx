import { Root } from '@DTOS';
import React from 'react';
import { Text, View } from 'react-native';
import CheckCircle from '../../assets/checkCircle.svg';
import { Button } from '../Button/Button';
import { $shadowProps } from '../ClientCard/ClientCard';

interface BillCardProps {
  data: Root;
  onPress?: () => void;
}

export function BillCard({ data, onPress }: BillCardProps) {
  const formattedDebt = data?.valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <View
      className="w-full bg-white rounded-lg gap-y-2 px-4 py-3 mb-4 mt-3"
      style={$shadowProps}>
      <View className="flex-row justify-between items-center">
        <Text className="text-contrast-300 text-lg font-Bold mb-2">
          {data?.descricao}
        </Text>
        {data?.valor > 0 ? (
          <Button buttonType="payment" title="Pagar" onPress={onPress} />
        ) : (
          <CheckCircle width={16} height={16} />
        )}
      </View>

      <View className="flex-row gap-x-2 mb-2">
        <Text className="text-text-200 text-sm font-Bold">
          Valor da dívida:
        </Text>

        <Text className="text-text-100 text-sm font-Regular">
          R$ {formattedDebt}
        </Text>
      </View>
    </View>
  );
}
