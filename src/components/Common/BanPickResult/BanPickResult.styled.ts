import styled from 'styled-components';

const ResultLayout = styled.article`
  width: 100%;
`;

const ResultHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MatchName = styled.div`
  margin-bottom: 24px;
  height: 46px;
  line-height: 46px;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.purple};
  background-image: linear-gradient(
    93deg,
    ${({ theme }) => theme.colors.purple99} 0%,
    ${({ theme }) => theme.colors.purple58} 100%
  );

  h2 {
    padding: 0 30px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.palette.white};
  }
`;

const TeamBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { ResultLayout, ResultHeader, MatchName, TeamBox };
