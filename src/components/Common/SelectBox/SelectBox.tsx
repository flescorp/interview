import React from 'react';
import { SelectBoxProps } from '@/components/Common/SelectBox/SelectBox.types';
import { SelectLayout } from '@/components/Common/SelectBox/SelectBox.styled';

export default function SelectBox({
  selectChange,
  selectedValue,
  options,
}: SelectBoxProps) {
  return (
    <SelectLayout onChange={selectChange} defaultValue={selectedValue}>
      {options.map(({ value, text, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {text}
        </option>
      ))}
    </SelectLayout>
  );
}
