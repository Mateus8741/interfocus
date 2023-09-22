import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClientScreen, HomeScreen } from '@screens';

import React from 'react';

export type AppStackParamList = {
  HomeScreen: undefined;
  ClientScreen: undefined;
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="ClientScreen" component={ClientScreen} />
    </Navigator>
  );
}
