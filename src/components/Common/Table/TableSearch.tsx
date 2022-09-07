import React from 'react';
import styled from 'styled-components';

import Input from '@/components/Common/Input';
import SelectBox, { Options } from '@/components/Common/SelectBox';

interface TableSearchProps {
  options: Array<Options>;
  selectedValue: string;
  selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  inputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchForm = styled.form`
  display: inline-flex;
  height: 48px;

  select {
    margin: 0 4px 0 0;
    padding: 0 19px;
    width: 280px;
    color: ${({ theme }) => theme.palette.black};
  }

  input#tableSearchInput {
    padding: 0 0 0 19px;
    margin-right: 4px;
    width: 300px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.palette.paleGray};
  }
`;
const SearchButton = styled.button`
  width: 90px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
`;

function TableSearch({
  options,
  selectedValue,
  selectChange,
  handleSubmit,
  inputValue,
  handleInputChange,
}: TableSearchProps) {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SelectBox
        options={options}
        selectChange={selectChange}
        selectedValue={selectedValue}
      />
      <Input
        type="text"
        id="tableSearchInput"
        name="tableSearchInput"
        placeholder="검색어를 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <SearchButton type="submit">검색</SearchButton>
    </SearchForm>
  );
}

export default TableSearch;
