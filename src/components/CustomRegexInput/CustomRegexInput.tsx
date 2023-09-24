import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaskInput, { Masks, UseMaskedInputProps } from 'react-native-mask-input';

export interface TextRegexProps extends UseMaskedInputProps {
  label?: string;
  errorMessage?: string;
  pattern: keyof typeof Masks;
}

export function CustomRegexInput({
  label,
  errorMessage,
  pattern,
  ...textInputProps
}: TextRegexProps) {
  return (
    <View className="mb-3">
      <Pressable>
        {label && (
          <Text className="text-contrast-700 font-SemiBold mb-2">{label}</Text>
        )}
        <View
          className={`flex-row bg-transparent border-[1px] rounded-md items-center ${
            errorMessage ? 'border-error' : 'border-[#E8E8E8]'
          }`}>
          <MaskInput
            {...textInputProps}
            mask={Masks[pattern]}
            keyboardType="numeric"
            className="w-full py-2 px-3 text-text-500 placeholder-text-400"
          />
        </View>
        {errorMessage && (
          <Text className="text-error text-xs font-Regular mt-1">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
