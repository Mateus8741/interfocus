import { ClientCard, Header, Screen, TextInput } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList } from 'react-native';

export function HomeScreen() {
  return (
    <>
      <Header goBack title="Clientes" />
      <Screen>
        <TextInput
          placeholder="Digite o nome do cliente"
          rightComponent={
            <MaterialIcons name="search" size={24} color="#A3A3A3" />
          }
        />

        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <ClientCard />}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    </>
  );
}
