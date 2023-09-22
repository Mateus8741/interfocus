import { TextInput } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

export function ClientScreen() {
  return (
    <View>
      <TextInput
        placeholder="Digite o nome do cliente"
        rightComponent={
          <MaterialIcons name="search" size={24} color="#A3A3A3" />
        }
      />
    </View>
  );
}
