import { FormTextInput, Header, Screen } from '@components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

export function NewBill() {
  const { control } = useForm();

  return (
    <>
      <Header goBack title="Nova Dívida" />
      <Screen>
        <FormTextInput
          control={control}
          name="bill"
          label="Nome da dívida"
          placeholder="Ex: Aluguel"
        />

        <View className="flex-row justify-between items-center space-x-2">
          <View className="w-[166px]">
            <FormTextInput
              control={control}
              name="created"
              label="Data de criação"
              placeholder="dd/mm/aaaa"
            />
          </View>

          <View className="w-[166px]">
            <FormTextInput
              control={control}
              name="value"
              label="Valor"
              placeholder="--"
            />
          </View>
        </View>
      </Screen>
    </>
  );
}
