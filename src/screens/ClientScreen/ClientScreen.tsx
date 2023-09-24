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

export function ClientScreen({ navigation }: UserTabProps<'ClientScreen'>) {
  const { data } = useQuery({
    queryKey: ['bill'],
    queryFn: () => api.get('/Divida/GetOData'),
  });

  function goToClientDetails(data: number) {
    navigation.navigate('ClientDetails', { id: data });
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
          <ClientCard data={item} onPress={() => goToClientDetails(item.id)} />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
