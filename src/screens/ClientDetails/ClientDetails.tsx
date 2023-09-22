import { FormTextInput, Header, Screen } from '@components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { AppScreenProps } from 'src/routes/navigationTypes';

export function ClientDetails({ route }: AppScreenProps<'ClientDetails'>) {
  console.log(route.params);

  const { control } = useForm();

  return (
    <Screen>
      <Header goBack title="Detalhes do cliente" />

      <FormTextInput
        control={control}
        name="name"
        label="Nome"
        placeholder="Digite o nome"
      />

      <View className="flex-row justify-between items-center space-x-2">
        <View className="w-[166px]">
          <FormTextInput
            control={control}
            name="cpf"
            label="CPF"
            placeholder="Digite o CPF"
          />
        </View>

        <View className="w-[166px]">
          <FormTextInput
            control={control}
            name="bday"
            label="Nascimento"
            placeholder="dd/mm/aaaa"
          />
        </View>
      </View>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o e-mail"
      />

      <Text className="text-contrast-700 text-lg font-Bold mt-2">Dívidas</Text>

      <Text className="text-contrast-700 text-lg font-Bold mt-2">
        Cliente sem dividas
      </Text>
    </Screen>
  );
}
