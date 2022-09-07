import React from 'react';
import { InputProps } from '@/components/Common/Input/Input.types';
import {InputLayout} from '@/components/Common/Input/Input.styled';

function Input({ ...props }: InputProps) {
  return <InputLayout {...props} />;
}

Input.defaultProps = {
  id: '',
  ref: null,
  value: '',
  placeholder: '',
  autoComplete: null,
  readOnly: false,
  disabled: false,
  maxLength: null,
  onChange: null,
};

export default Input;
