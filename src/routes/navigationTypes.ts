import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from './AppStack';
import { AppTabBar } from './appTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AppTabBar {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabProps<RouteName extends keyof AppTabBar> =
  BottomTabScreenProps<AppTabBar, RouteName>;
