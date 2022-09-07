import React from 'react';

const enum ButtonVariant {
  Default,
  White,
  Mono,
  Disabled,
  Black,
}

const enum ButtonSize {
  Medium,
  Big,
  Small,
}

const enum ButtonRadius {
  Oval,
  Square,
}

interface ButtonStyledProps {
  width?: number | string;
  height?: number | string;
  radius?: ButtonRadius;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

interface ButtonProps extends ButtonStyledProps {
  type?: 'submit' | 'button' | 'reset';
  label: string;
  children?: React.ReactNode;
  className?: string;
  from?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

export { ButtonVariant, ButtonSize, ButtonRadius };
export type { ButtonStyledProps, ButtonProps };
