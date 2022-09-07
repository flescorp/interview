import styled, { css } from 'styled-components';
import { InputSearchVariant } from '@/components/Common/InputSearch/InputSearch.types';

const variantWhite = css`
  border-color: #ffffff;

  input {
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #fff !important;
    }
  }
`;

const SearchWrap = styled.form<{ variant?: InputSearchVariant }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  width: 190px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.palette.black};
  border-radius: 16px;
  ${props => props.variant === InputSearchVariant.White && variantWhite};
  
  input {
    padding-left: 12px;
  }
`;

const Button = styled.button`
  padding: 0 12px;
`;

export { SearchWrap, Button };
