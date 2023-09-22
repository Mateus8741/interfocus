import { Header, Screen } from '@components';
import React from 'react';
import { AppScreenProps } from 'src/routes/navigationTypes';

export function ClientDetails({ route }: AppScreenProps<'ClientDetails'>) {
  console.log(route.params);

  return (
    <Screen>
      <Header goBack title="Detalhes do cliente" />
    </Screen>
  );
}
