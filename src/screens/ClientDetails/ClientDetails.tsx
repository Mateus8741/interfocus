import { BillCard, DetailsText, Header, Screen } from '@components';
import { UserTabProps } from '@routes';
import React from 'react';
import { Text, View } from 'react-native';

export function ClientDetails({ route }: UserTabProps<'ClientDetails'>) {
  const { name, cpf, email, bday, debt } = route.params;
  console.log(route.params);
  return (
    <>
      <Header goBack title="Detalhes do cliente" />
      <Screen>
        <DetailsText label="Nome" value={name} />

        <View className="flex-row justify-between items-center space-x-2 mt-3 mb-3">
          <View className="w-[166px]">
            <DetailsText label="CPF" value={cpf} />
          </View>

          <View className="w-[166px]">
            <DetailsText label="Nascimento" value={bday} />
          </View>
        </View>

        <DetailsText label="Email" value={email} />

        <View className="flex-row justify-between mt-6 mb-2">
          <Text className="text-contrast-700 text-lg font-Bold">Dívidas</Text>

          <View className="border-b-2 border-contrast-700">
            <Text className="text-contrast-700 text-lg font-Bold">
              Ver todas
            </Text>
          </View>
        </View>

        <BillCard bill={name} value={debt} status="paid" />
      </Screen>
    </>
  );
}
