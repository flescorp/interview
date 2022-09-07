import styled from 'styled-components';

const Mask = styled.div`
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.deviceSizes.desktop};
  margin: -80px auto 0;
  padding: 56px 40px 67px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.15);
`;

export default Mask;
