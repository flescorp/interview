interface InputSearchProp {
  id?: string;
  name: string;
  placeholder?: string;
  variant?: InputSearchVariant;
  onSubmit: (query: string) => void;
}

const enum InputSearchVariant {
  White,
}

export { InputSearchVariant };
export type { InputSearchProp };
