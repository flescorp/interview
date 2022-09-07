import React from 'react';
import Image from 'next/image';
import Label from '@/components/Common/Label/Label';
import Input from '@/components/Common/Input';
import Invalid from '@/assets/icons/invalid-name.svg';
import { InputContainer, NecessaryEle, ErrorEle } from './TextField.styled';
import { InputLabelProp } from './TextField.types';

function TextField({
  id,
  label,
  isRequired,
  disabled,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  onChange,
  children,
  isNecessary,
  errorMessage,
}: InputLabelProp) {
  return (
    <InputContainer>
      <Label id={id||name} isRequired={isRequired}>
        {label}
      </Label>

      <Input
        type={type}
        id={id||name}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onChange={onChange}
      />
      {children}

      {isNecessary && (
        <NecessaryEle>
          <p> - 8~20자의 영문, 숫자, 특수문자 조합으로 입력</p>
          <p> - 3자리 이상 반복 또는 연속되는 영문/숫자 사용 불가</p>
        </NecessaryEle>
      )}

      {errorMessage && (
        <ErrorEle>
          <Image src={Invalid} width={16} height={16} alt="불일치 항목" />
          <p className="errorStyle">{errorMessage}</p>
        </ErrorEle>
      )}
    </InputContainer>
  );
}

TextField.defaultProps = {
  isRequired: false,
  disabled: false,
  value: '',
  placeholder: '',
  maxLength: null,
  autoComplete: 'off',
  children: null,
  isNecessary: false,
  isError: false,
  errorMessage: '',
};

export default TextField;
