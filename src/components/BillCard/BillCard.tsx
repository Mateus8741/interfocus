import React from 'react';
import { Text, View } from 'react-native';
import CheckCircle from '../../assets/checkCircle.svg';
import { Button } from '../Button/Button';
import { $shadowProps } from '../ClientCard/ClientCard';

interface BillCardProps {
  bill: string;
  value: number;
  status: 'paid' | 'unpaid';
}

export function BillCard({ bill, value, status }: BillCardProps) {
  const formattedDebt = value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <View
      className="w-full bg-white rounded-lg gap-y-2 px-4 py-3 mb-4"
      style={$shadowProps}>
      <View className="flex-row justify-between items-center">
        <Text className="text-contrast-300 text-lg font-Bold mb-2">{bill}</Text>
        {status === 'unpaid' ? (
          <Button buttonType="payment" title="Pagar" />
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
