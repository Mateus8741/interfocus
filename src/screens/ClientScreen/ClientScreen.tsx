import { Root } from '@DTOS';
import {
  ClientCard,
  FloatingButton,
  Header,
  Screen,
  TextInput,
} from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import { api } from '@libs';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList } from 'react-native';
import { UserTabProps } from 'src/routes/navigationTypes';

// const data: Root[] = [
//   {
//     id: 1,
//     cliente: 'João da Silva',
//     cpf: '123.456.789-10',
//     email: 'teste@tste.com',
//     bday: '12/12/1999',
//     debt: 3450.46,
//     status: 'paid',
//   },
//   {
//     id: '2',
//     name: 'Arthur da Silva',
//     cpf: '123.421.789-10',
//     email: 'teste@test.com',
//     bday: '12/12/1999',
//     debt: 6846.25,
//     status: 'pending',
//   },
//   {
//     id: '3',
//     name: 'Maria da Silva',
//     cpf: '432.456.789-10',
//     email: 'teste@tte.com',
//     bday: '12/12/1999',
//     debt: 9863.52,
//     status: 'paid',
//   },
// ];

export function ClientScreen({ navigation }: UserTabProps<'ClientScreen'>) {
  const { data } = useQuery({
    queryKey: ['bill'],
    queryFn: () => api.get('/Divida/GetOData'),
  });

  function goToClientDetails(data: Root) {
    navigation.navigate('ClientDetails', data);
  }

  function goToNewClient() {
    navigation.navigate('NewClient');
  }

  return (
    <Screen>
      <Header title="Clientes" />
      <TextInput
        placeholder="Digite o nome do cliente"
        rightComponent={
          <MaterialIcons name="search" size={24} color="#A3A3A3" />
        }
      />

      <FloatingButton onPress={goToNewClient} />

      <FlatList
        data={data?.data.d.results}
        renderItem={({ item }) => (
          <ClientCard data={item} onPress={() => goToClientDetails(item)} />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
