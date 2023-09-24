import {
  Button,
  FormCustomPickerSelect,
  FormTextInput,
  Header,
  Screen,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { dataParaISO8601, useAppSafeArea } from '@hooks';
import { api } from '@libs';
import { UserTabProps } from '@routes';
import { useToastService } from '@services';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { NewBillScheema, newBillScheema } from './newBillScheema';

export function NewBill({ navigation, route }: UserTabProps<'NewBill'>) {
  const { id } = route.params;

  const { bottom } = useAppSafeArea();

  const { showToast } = useToastService();

  const { control, formState, handleSubmit } = useForm<NewBillScheema>({
    resolver: zodResolver(newBillScheema),
    defaultValues: {
      bill: '',
      created: '',
      value: '',
      status: '',
      payementDate: '',
    },
  });

  async function createNewBill(data: NewBillScheema) {
    try {
      if (id) {
        await api.post('/Divida', {
          valor: data.value,
          dataPagamento: dataParaISO8601(data.payementDate),
          descricao: data.status,
          clienteId: id,
        });

        showToast({
          type: 'success',
          message: 'Nova Dívida adicionada!',
        });

        navigation.navigate('ClientScreen');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function goBack() {
    navigation.goBack();
  }

  const items = [
    { label: 'Pago', value: 'paid' },
    { label: 'Pendente', value: 'pending' },
  ];

  return (
    <>
      <Header goBack title="Nova Dívida" />
      <Screen scrollable>
        <View className="">
          <FormTextInput
            control={control}
            name="bill"
            label="Nome da dívida"
            placeholder="Ex: Aluguel"
          />

          <View className="flex-1 flex-row justify-between items-center space-x-2">
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

          <FormCustomPickerSelect
            control={control}
            items={items}
            name="status"
            label="Situação"
            onValueChange={() => {}}
          />

          <View className="w-[166px] mt-4">
            <FormTextInput
              control={control}
              name="payementDate"
              label="Data do pagamento"
              placeholder="dd/mm/aaaa"
            />
          </View>
        </View>

        <View
          className="flex-1 flex-row gap-x-4 self-center justify-end items-center mt-48"
          style={{ paddingBottom: bottom }}>
          <Button title="Cancelar" buttonType="outlined" onPress={goBack} />
          <Button
            title="Salvar"
            onPress={handleSubmit(createNewBill)}
            buttonType={!formState.isValid ? 'disabled' : 'primary'}
            disabled={!formState.isValid}
          />
        </View>
      </Screen>
    </>
  );
}
