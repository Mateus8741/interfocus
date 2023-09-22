import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientDTO } from '@DTOS';
import { ClientDetails, ClientScreen } from '@screens';
import React from 'react';

export type UserAppStackParamList = {
  ClientScreen: undefined;
  ClientDetails: ClientDTO;
};

export function UserAppStack() {
  const { Navigator, Screen } =
    createNativeStackNavigator<UserAppStackParamList>();

  return (
    <Navigator
      initialRouteName="ClientScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="ClientScreen" component={ClientScreen} />
      <Screen name="ClientDetails" component={ClientDetails} />
    </Navigator>
  );
}
