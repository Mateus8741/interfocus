import {
  Button,
  FormCustomRegexInput,
  FormTextInput,
  Header,
  Screen,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserTabProps } from '@routes';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { dataParaISO8601, useAppSafeArea } from '@hooks';
import { api } from '@libs';
import { useToastService } from '@services';
import { NewClientScheema, newClientScheema } from './newClientScheema';

export function NewClient({ navigation }: UserTabProps<'NewClient'>) {
  const [CPF, setCPF] = React.useState<string>('');

  const { showToast } = useToastService();

  const { bottom } = useAppSafeArea();

  const { control, handleSubmit, formState } = useForm<NewClientScheema>({
    resolver: zodResolver(newClientScheema),
    defaultValues: {
      name: '',
      cpf: '',
      bday: '',
      email: '',
    },

    mode: 'onChange',
  });

  async function createNewClient(data: NewClientScheema) {
    try {
      await api.post('/Cliente', {
        nome: data.name,
        cpf: data.cpf,
        email: data.email,
        dataNascimento: dataParaISO8601(data.bday),
      });

      showToast({
        type: 'success',
        message: 'Novo cliente cadastrado!',
      });

      navigation.navigate('ClientScreen');
    } catch (error) {
      console.log(error);
    }
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <>
      <Header goBack title="Novo cliente" />

      <Screen scrollable>
        <FormTextInput
          control={control}
          name="name"
          label="Nome"
          placeholder="Digite o nome"
        />

        <View className="flex-row justify-between items-center space-x-2">
          <View className="w-[166px]">
            {/* <FormTextInput
              control={control}
              name="cpf"
              label="CPF"
              placeholder="Digite o CPF"
              maxLength={11}
              value={CPF}
              onChangeText={text => {
                setCPF(formatarCPF(text));
              }}
            /> */}

            <FormCustomRegexInput
              control={control}
              name="cpf"
              label="CPF"
              pattern="BRL_CPF"
            />
          </View>

          <View className="w-[166px]">
            {/* <FormTextInput
              control={control}
              name="bday"
              label="Nascimento"
              placeholder="dd/mm/aaaa"
              maxLength={8}
            /> */}

            <FormCustomRegexInput
              control={control}
              name="bday"
              label="Nascimento"
              pattern="DATE_DDMMYYYY"
            />
          </View>
        </View>

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite o e-mail"
        />

        <Text className="text-contrast-700 text-lg font-Bold mt-2">
          Dívidas
        </Text>

        <View className="flex-1 h-48 justify-center items-center mb-14">
          <Text className="text-tezt-200 text-base font-Regular">
            Cliente sem dividas
          </Text>
        </View>

        <View
          className="flex-1 flex-row gap-x-4 self-center justify-end items-center"
          style={{ paddingBottom: bottom }}>
          <Button title="Cancelar" buttonType="outlined" onPress={goBack} />
          <Button
            title="Salvar"
            onPress={handleSubmit(createNewClient)}
            buttonType={!formState.isValid ? 'disabled' : 'primary'}
            disabled={!formState.isValid}
          />
        </View>
      </Screen>
    </>
  );
}
