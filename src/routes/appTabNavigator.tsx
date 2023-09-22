import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@screens';

import { Platform } from 'react-native';

import HomeSvg from '../assets/home.svg';
import UserSvg from '../assets/user.svg';
import { UserAppStack } from './UserAppStack';

export type AppTabBar = {
  HomeScreen: undefined;
  UserAppStack: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppTabBar>;

const { Navigator, Screen } = createBottomTabNavigator<AppTabBar>();

export function AppTabBar() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#AFDA51',
        tabBarInactiveTintColor: '#62A856',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 48 : 80,
          paddingBottom: Platform.OS === 'android' ? 12 : 24,
          paddingTop: 12,
        },
      }}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeSvg width={24} height={24} />,
        }}
      />

      <Screen
        name="UserAppStack"
        component={UserAppStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <UserSvg width={24} height={24} />,
        }}
      />
    </Navigator>
  );
}
