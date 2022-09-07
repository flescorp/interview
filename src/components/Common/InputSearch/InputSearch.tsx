import React, { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/Common/Input';
import { InputSearchProp } from '@/components/Common/InputSearch/InputSearch.types';
import {
  SearchWrap,
  Button,
} from '@/components/Common/InputSearch/InputSearch.styled';
import searchIcon from '@/assets/icons/ico-search-bk.svg';

function InputSearch({ onSubmit, variant, ...props }: InputSearchProp) {
  const [input, setInput] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <SearchWrap variant={variant} onSubmit={handleSubmit}>
      <Input
        {...props}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit">
        <Image src={searchIcon} alt="검색" width={11} height={11} />
      </Button>
    </SearchWrap>
  );
}

InputSearch.defaultProps = {
  id: null,
  value: '',
  placeholder: null,
};

export default InputSearch;
