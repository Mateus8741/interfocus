import { Header, Screen, SummaryCard } from '@components';
import React from 'react';
import { FlatList } from 'react-native';

export function HomeScreen() {
  return (
    <>
      <Header title="Resumo de dívidas" />
      <Screen>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <SummaryCard />}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    </>
  );
}
