import React from 'react';
import styled from 'styled-components';
import Modal, {
  ModalContentLayout,
  ModalContentTitle,
  ModalContentBtns,
  ModalProp,
} from '@/components/Common/Modal';

const ModalBtn = styled.button`
  width: calc(100% / 2);
  color: ${({ theme }) => theme.palette.white};

  &:first-child {
    padding: 15px 60px;
    background-color: ${({ theme }) => theme.palette.gray};
  }

  &:last-child {
    padding: 15px 60px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
export default function Confirm({
  title,
  visible,
  children,
  onConfirm,
  onClick,
  width,
}: ModalProp) {
  return (
    <Modal width={width} visible={visible} onClick={onClick}>
      <ModalContentLayout>
        <ModalContentTitle>{title}</ModalContentTitle>
        {children}
        <ModalContentBtns>
          <ModalBtn onClick={onClick}>취소</ModalBtn>
          <ModalBtn onClick={onConfirm}>확인</ModalBtn>
        </ModalContentBtns>
      </ModalContentLayout>
    </Modal>
  );
}
