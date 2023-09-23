import {
  BillCard,
  Button,
  CustomBottomSheet,
  DetailsText,
  Header,
  MyBottonShetHandle,
  Screen,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { api, useMutationQuery } from '@libs';
import { UserTabProps } from '@routes';
import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';

export function ClientDetails({ route }: UserTabProps<'ClientDetails'>) {
  const { cliente, id } = route.params;

  const { bottom } = useAppSafeArea();

  const modal = useRef<MyBottonShetHandle>(null);

  const modalSize = Dimensions.get('screen').height / 4.2 + bottom;

  function handleOpenModal() {
    modal.current?.handleParentOpenBottonShet();
  }

  function handleCloseModal() {
    modal.current?.handleParentCloseBottonShet();
  }

  const { data } = useQuery({
    queryKey: ['bill', id],
    queryFn: () => api.get(`/Divida/${id}`),
  });

  const { mutate, isLoading } = useMutationQuery({
    endPoint: '/Divida/Pagar',
    body: id,
  });

  function payBill() {
    mutate();
    handleCloseModal();
  }

  return (
    <>
      <Header goBack title="Detalhes do cliente" />
      <Screen>
        <DetailsText label="Nome" value={cliente?.nome} />

        <View className="flex-row justify-between items-center space-x-2 mt-3 mb-3">
          <View className="w-[166px]">
            <DetailsText label="CPF" value={cliente?.cpf} />
          </View>

          <View className="w-[166px]">
            <DetailsText label="Nascimento" value={cliente?.dataNascimento} />
          </View>
        </View>

        <DetailsText label="Email" value={cliente?.email} />

        <View className="flex-row justify-between mt-6 mb-2">
          <Text className="text-contrast-700 text-lg font-Bold">Dívidas</Text>

          <View className="border-b-2 border-contrast-700">
            <Text className="text-contrast-700 text-lg font-Bold">
              Ver todas
            </Text>
          </View>
        </View>

        <BillCard data={data?.data} onPress={handleOpenModal} />
      </Screen>

      <CustomBottomSheet ref={modal} height={modalSize}>
        <View className="flex-col items-center justify-between mt-12">
          <Text className="text-black text-sm font-Bold text-center">
            Ao confirmar, essa dívida será quitada. {'\n'}
            Deseja realmente confirmar?
          </Text>

          <View
            className="flex-row gap-x-4 self-center justify-center items-center mt-12"
            style={{ paddingBottom: bottom }}>
            <Button
              title="Cancelar"
              buttonType="outlined"
              onPress={handleCloseModal}
            />
            <Button
              title="Confirmar"
              onPress={payBill}
              buttonType={isLoading ? 'isLoading' : 'primary'}
            />
          </View>
        </View>
      </CustomBottomSheet>
    </>
  );
}
