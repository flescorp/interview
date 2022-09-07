import styled from 'styled-components';

const InputContainer = styled.div`
  margin: 0.67em 0;
  position: relative;

  input {
    margin-top: 10px;
    padding: 8px 0;
    border-bottom: 2px solid #e9ecef;
    color: ${({ theme }) => theme.palette.black};
    caret-color: ${({ theme }) => theme.palette.primary};
    font-family: ${({ theme }) => theme.fonts.SpoqaHanSansNeo};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 20%;
  }
`;

const NecessaryEle = styled.div`
  p {
    margin: 8px 0;
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    color: ${({ theme }) => theme.palette.status.info};
  }
`;
const ErrorEle = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;

  > .errorStyle {
    padding-left: 5px;
    font-size: 13px;
    color: ${({ theme }) => theme.palette.status.warning};
  }
`;

export { InputContainer, NecessaryEle, ErrorEle };
