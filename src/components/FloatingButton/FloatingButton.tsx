import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface FloatingButtonProps {
  onPress: () => void;
}

export function FloatingButton({ onPress }: FloatingButtonProps) {
  return (
    <TouchableOpacity
      className="w-12 h-12 bg-contrast-700 justify-center items-center rounded-full absolute bottom-12 right-3 z-10"
      onPress={onPress}>
      <MaterialIcons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
}
