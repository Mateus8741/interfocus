import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import * as CustomRegexInput from '../CustomRegexInput/CustomRegexInput';

export function FormCustomRegexInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: CustomRegexInput.TextRegexProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <CustomRegexInput.CustomRegexInput
          onChangeText={field.onChange}
          value={field.value}
          {...textInputProps}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
