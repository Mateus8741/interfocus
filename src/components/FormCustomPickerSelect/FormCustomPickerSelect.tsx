import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import {
  CustomPickerSelect,
  CustomPickerSelectProps,
} from '../CustomPickerSelect/CustomPickerSelect';

export function FormCustomPickerSelect<FormType extends FieldValues>({
  control,
  name,
  rules,
  onValueChange,
  ...pickerSelectProps
}: CustomPickerSelectProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <CustomPickerSelect
          value={field.value}
          onValueChange={field.onChange}
          {...pickerSelectProps}
        />
      )}
    />
  );
}
