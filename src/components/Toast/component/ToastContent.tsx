import React from 'react';
import { Dimensions, Text, View, ViewStyle } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Toast } from '@services';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  return (
    <View
      {...$boxStyles}
      style={[{ top: 100 }, $shadowProps]}
      className="bg-white p-4">
      <MaterialIcons name="check-circle" size={24} color="#62A856" />
      <Text
        className="text-sm font-bold pl-2 text-black"
        style={{ flexShrink: 1 }}>
        {toast?.message}
      </Text>
    </View>
  );
}

const $boxStyles: ViewStyle = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 16,
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};

const $shadowProps: ViewStyle = {
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 4 },
};
