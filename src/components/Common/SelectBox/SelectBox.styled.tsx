import styled from 'styled-components';
import selectOff from '@/assets/icons/ico-select-arrow-off.svg';

const SelectLayout = styled.select`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.palette.paleGray};
  background: url(${selectOff.src}) #fff 98% 50%/12px no-repeat;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.gray};
  appearance: none;

  // placeholder
  & option[value=''][disabled] {
    display: none;
  }
`;
export { SelectLayout };
