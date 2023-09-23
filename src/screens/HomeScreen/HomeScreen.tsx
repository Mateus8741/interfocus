import { Header, Screen, SummaryCard } from '@components';
import { api } from '@libs';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList } from 'react-native';

export function HomeScreen() {
  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: () => api.get('/Divida/GetOData'),
  });

  // console.log(data?.data.d.results);

  return (
    <Screen>
      <Header title="Resumo de dívidas" />
      <FlatList
        data={data?.data.d.results}
        renderItem={({ item }) => <SummaryCard {...item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
