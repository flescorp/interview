import styled, { css } from 'styled-components';

const ModalWrapper = styled.div<{
  visible: boolean;
  width?: number | string;
  height?: number | string;
}>`
  position: fixed;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  top: calc(100vh - 60%);
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 2;
  display: ${props => (props.visible ? 'block' : 'none')};
  outline: 0;
  box-sizing: border-box;
`;

const ModalOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.palette.black};
  opacity: 0.6;
  box-sizing: border-box;
`;

const ModalInner = styled.div<{ width?: number | string }>`
  margin: 0 auto;
  padding: 40px 20px 80px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  min-height: 200px;
  border-radius: 24px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.palette.white};
  box-sizing: border-box;
  overflow: hidden;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const ModalContentLayout = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontSizes.small};
  // 시뮬레이션 비공개 방 입장 모달창 스타일
  label {
    color: ${({ theme }) => theme.palette.paleGray};
  }

  input {
    margin: 12px 0 0;
    width: 100%;
    box-sizing: border-box;

    &[type='text'] {
      border-bottom: solid 1px ${({ theme }) => theme.palette.paleGray};

      &::placeholder {
        color: ${({ theme }) => theme.palette.black};
      }
    }

    &[type='password'] {
      padding: 14px 20px;
      border-radius: 8px;
      border: solid 1px ${({ theme }) => theme.palette.paleGray};
      background-color: ${({ theme }) => theme.palette.white};
    }
  }
`;
const ModalContentTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.palette.black};
`;
const ModalContentBtns = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 54px;
`;

const TextCenterBox = styled.div`
  text-align: center;
`;

export {
  ModalOverlay,
  ModalWrapper,
  ModalInner,
  ModalCloseBtn,
  ModalContentLayout,
  ModalContentTitle,
  ModalContentBtns,
  TextCenterBox,
};
