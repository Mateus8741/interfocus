import { useAppSafeArea } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';

import ArrowSvg from '../../assets/arrowleft.svg';

interface HeaderProps {
  title: string;
  goBack?: boolean;
}

export function Header({ title, goBack }: HeaderProps) {
  const { top } = useAppSafeArea();

  const { goBack: Back } = useNavigation();

  function handleGoBack() {
    Back();
  }

  const gobackIcon = goBack ? 'justify-between' : 'justify-center';

  return (
    <View
      className="pb-4 bg-white"
      style={{
        paddingTop: top,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View
        className={`flex-row ${gobackIcon} items-center px-5`}
        style={{
          paddingTop: 10,
        }}>
        {goBack && (
          <Pressable
            hitSlop={10}
            onPress={handleGoBack}
            className="w-5 h-5 border justify-center items-center border-contrast-700 rounded-[4px]">
            <ArrowSvg width={20} height={20} />
          </Pressable>
        )}

        <View className="items-center">
          <Text className="text-contrast-700 text-lg font-Bold">{title}</Text>
        </View>

        {goBack && <View className="bg-transparent h-5 w-5" />}
      </View>
    </View>
  );
}
