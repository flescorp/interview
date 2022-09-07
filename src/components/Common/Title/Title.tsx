import styled from 'styled-components';

interface TitleProps {
  title: string | undefined;
}
const TitleLayout = styled.h1`
  box-sizing: border-box;
  height: 200px;
  margin: 0;
  padding-top: 42px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.xxxxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  line-height: 39px;
`;
 function Title({ title }: TitleProps) {
  return <TitleLayout>{title}</TitleLayout>;
}
export default Title;