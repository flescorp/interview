interface InputLabelProp {
  id?: string;
  label: string | React.ReactNode;
  isRequired?: boolean;
  disabled?: boolean;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNecessary?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  maxLength?: number;
  children?: JSX.Element;
}

export type { InputLabelProp };
