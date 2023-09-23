import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Platform, Text, View } from 'react-native'
import RNPickerSelect, {
  Item,
  PickerSelectProps,
} from 'react-native-picker-select'

export type CustomPickerSelectProps = PickerSelectProps & {
  label?: string
  items: Item[]
  containerClassName?: string
  errorMessage?: string
  placeholder?: string
}

export function CustomPickerSelect({
  items,
  label,
  containerClassName,
  errorMessage,
  ...pickerSelectProps
}: CustomPickerSelectProps) {
  return (
    <View className={containerClassName}>
      {label && (
        <Text className="text-text-600 font-medium text-sm pb-[10px]">
          {label}
        </Text>
      )}

      <View
        className={`flex-row justify-between h-9 border-[1px] rounded-md ${
          errorMessage ? 'border-error-600' : 'border-[#d2d2d255]'
        }`}
      >
        <RNPickerSelect
          items={items}
          placeholder={{
            label: 'Selecione',
            value: '',
            color: '#A3A3A3',
          }}
          style={{
            viewContainer: {
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 5,
            },
          }}
          fixAndroidTouchableBug
          {...pickerSelectProps}
        />
        {Platform.OS === 'ios' && (
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#A3A3A3"
            style={{
              position: 'absolute',
              right: 8,
              alignSelf: 'center',
            }}
          />
        )}
      </View>
    </View>
  )
}
