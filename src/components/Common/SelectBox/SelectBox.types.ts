import React from 'react';

interface Options {
  value: string;
  text: string;
  disabled?: boolean; // Use for select placeholder
}

interface SelectBoxProps {
  options: Array<Options>;
  selectedValue: string;
  selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type { SelectBoxProps, Options };
