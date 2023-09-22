import { ClientCard, Header, Screen, TextInput } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList } from 'react-native';
import { AppScreenProps } from 'src/routes/navigationTypes';

const data = [
  {
    id: 1,
    name: 'João da Silva',
    cpf: '123.456.789-10',
    email: 'teste@tste.com',
    debt: 3450.46,
  },
  {
    id: 2,
    name: 'Arthur da Silva',
    cpf: '123.421.789-10',
    email: 'teste@test.com',
    debt: 6846.25,
  },
  {
    id: 3,
    name: 'Maria da Silva',
    cpf: '432.456.789-10',
    email: 'teste@tte.com',
    debt: 9863.52,
  },
];

export function ClientScreen({ navigation }: AppScreenProps<'AppTabBar'>) {
  function goToClientDetails(data: any) {
    navigation.navigate('ClientDetails', data);
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

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ClientCard {...item} onPress={() => goToClientDetails(item)} />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
