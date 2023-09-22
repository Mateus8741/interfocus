import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { AppTabBar } from './appTabNavigator';

export type AppStackParamList = {
  AppTabBar: undefined;
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="AppTabBar"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="AppTabBar" component={AppTabBar} />
    </Navigator>
  );
}
