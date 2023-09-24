import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientDetails, ClientScreen, NewBill, NewClient } from '@screens';
import React from 'react';

export type UserAppStackParamList = {
  ClientScreen: undefined;
  NewClient: undefined;
  ClientDetails: { id: number };
  NewBill: { id?: number };
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
      <Screen name="NewClient" component={NewClient} />
      <Screen name="ClientDetails" component={ClientDetails} />
      <Screen name="NewBill" component={NewBill} />
    </Navigator>
  );
}
