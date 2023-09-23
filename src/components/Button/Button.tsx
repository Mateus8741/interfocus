import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { VariantProps, tv } from 'tailwind-variants';

const $button = tv({
  slots: {
    container:
      'h-[38px] px-[10px] bg-white rounded-lg items-center justify-center',
    textBase: 'text-center font-Bold text-base',
  },
  variants: {
    buttonType: {
      primary: {
        container: 'bg-contrast-700',
        textBase: 'text-white',
      },
      outlined: {
        container: 'border-2 border-contrast-700',
        textBase: 'text-contrast-700',
      },
      payment: {
        container: 'bg-error',
        textBase: 'text-white',
      },
      disabled: {
        container: 'bg-gray-200',
        textBase: 'text-gray-400',
      },
      isLoading: {
        container: 'bg-contrat-700 w-[102px]',
        textBase: 'text-white',
      },
    },
  },

  defaultVariants: {
    buttonType: 'primary',
  },
});

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof $button> {
  title: string;
  buttonType?: 'primary' | 'outlined' | 'payment' | 'disabled' | 'isLoading';
}

export function Button({
  title,
  buttonType = 'primary',
  ...rest
}: ButtonProps) {
  const { container, textBase } = $button({ buttonType });

  return (
    <TouchableOpacity
      className={container()}
      disabled={buttonType === 'disabled' || buttonType === 'isLoading'}
      {...rest}>
      {buttonType === 'isLoading' ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className={textBase()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
