import { Button, FormTextInput, Header, Screen } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserTabProps } from '@routes';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { useAppSafeArea } from '@hooks';
import {
  ClientDetailsScheema,
  clientDetailsScheema,
} from './cliendDetailsScheema';

export function ClientDetails({ route }: UserTabProps<'ClientDetails'>) {
  const { bottom } = useAppSafeArea();

  const { email, cpf, bday, name } = route.params;

  const { control } = useForm<ClientDetailsScheema>({
    resolver: zodResolver(clientDetailsScheema),

    values: {
      name,
      cpf,
      bday,
      email,
    },
  });

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

      <View className="flex-1 justify-center items-center">
        <Text className="text-tezt-200 text-base font-Regular">
          Cliente sem dividas
        </Text>
      </View>

      <View
        className="flex-row gap-x-4 self-center justify-end items-center"
        style={{ paddingBottom: bottom }}>
        <Button title="Cancelar" buttonType="outlined" />
        <Button title="Salvar" />
      </View>
    </Screen>
  );
}
