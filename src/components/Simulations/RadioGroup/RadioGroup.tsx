import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import IcoSelected from '@/assets/icons/selection-radio-selected.svg';
import IcoUnSelected from '@/assets/icons/selection-radio-unselected.svg';

interface Options {
  text: string;
  value: number;
  default?: boolean;
}

interface RadioGroupProp {
  label: string;
  name: string;
  checkedValue: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Array<Options>;
}

const Container = styled.div`
  .radioGroup {
    margin-left: 139px;
    display: flex;
  }

  input:checked + label {
    border: solid 1px #602ff7;
  }

  input:disabled + label {
    border: solid 1px #e9ecef;
  }
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #48484a;

  > .requiredStyle {
    font-size: 13px;
    color: #db3e3e;
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 54px;
  margin: 0 7px 11px 10px;
  padding: 17px 24px 15px 20px;
  border-radius: 12px;
  background-color: #fff;
  border: solid 1px #e9ecef;
`;

function RadioGroup({
  name,
  label,
  options,
  checkedValue,
  onChange,
}: RadioGroupProp) {
  return (
    <Container className="radioGroupContainer">
      <Label>
        {label}
        <span className="requiredStyle">*</span>
      </Label>
      <div className="radioGroup">
        {options.map(({ value, text }) => {
          const key = `${name}${value}`;
          const isChecked = Number(checkedValue) === value;
          const img = isChecked ? IcoSelected : IcoUnSelected;

          return (
            <InputLabel key={key}>
              <Image src={img} width={20} height={20} alt="radio" />
              <span>{text}</span>
              <Input
                type="radio"
                id={key}
                value={value}
                name={name}
                checked={isChecked}
                onChange={onChange}
              />
            </InputLabel>
          );
        })}
      </div>
    </Container>
  );
}

export default RadioGroup;
