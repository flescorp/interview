import React from 'react';
import styled from 'styled-components';
import Modal, {
  ModalContentLayout,
  ModalContentTitle,
  ModalContentBtns,
  ModalProp,
} from '@/components/Common/Modal';

interface ModalAlertProp extends ModalProp {
  label?: string;
}

const ModalContentCreateLayout = styled(ModalContentLayout)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalBtn = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.primary};
`;

export default function Alert({
  visible,
  title,
  label,
  onClick,
  children,
  width = 360,
}: ModalAlertProp) {
  return (
    <Modal width={width} visible={visible} onClick={onClick}>
      <ModalContentCreateLayout>
        <ModalContentTitle>{title}</ModalContentTitle>
        {children}
        <ModalContentBtns>
          <ModalBtn onClick={onClick}>{label}</ModalBtn>
        </ModalContentBtns>
      </ModalContentCreateLayout>
    </Modal>
  );
}

Alert.defaultProps = {
  label: '확인',
};
