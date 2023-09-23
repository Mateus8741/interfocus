import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect, {
  Item,
  PickerSelectProps,
} from 'react-native-picker-select';

export type CustomPickerSelectProps = PickerSelectProps & {
  label?: string;
  items: Item[];
};

export function CustonDropdown({
  items,
  label,
  ...pickerSelectProps
}: CustomPickerSelectProps & { label?: string }) {
  return (
    <View className="bg-white">
      {label && (
        <Text className="text-text-600 font-medium text-sm pb-[10px]">
          {label}
        </Text>
      )}
      <RNPickerSelect
        items={items}
        placeholder={{
          label: 'Selecione',
          value: '',
          color: '#A3A3A3',
        }}
        {...pickerSelectProps}
        style={{
          viewContainer: {
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 8,
            borderRadius: 5,
          },
        }}
      />
    </View>
  );
}
