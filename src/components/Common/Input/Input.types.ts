import { ChangeEvent, RefObject } from 'react';

interface InputProps {
  id?: string;
  name: string;
  ref?: RefObject<HTMLInputElement>;
  type: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  accept?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean | string;
}

export type { InputProps };
