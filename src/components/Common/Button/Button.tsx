import React from 'react';
import {
  ButtonVariant,
  ButtonSize,
  ButtonRadius,
  ButtonProps,
} from '@/components/Common/Button/Button.types';
import { ButtonLayout } from '@/components/Common/Button/Button.styled';

function Button({ type, label, children, ...props }: ButtonProps) {
  return (
    <ButtonLayout type={type} {...props}>
      {children || label}
    </ButtonLayout>
  );
}

Button.defaultProps = {
  type: 'button',
  label: '',
  width: 159,
  height: 44,
  radius: ButtonRadius.Oval,
  variant: ButtonVariant.Default,
  size: ButtonSize.Medium,
  disabled: false,
};

export default Button;
