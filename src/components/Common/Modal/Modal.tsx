import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalWrapper,
  ModalInner,
  ModalCloseBtn,
} from '@/components/Common/Modal/Modal.styled';
import { ModalProp } from '@/components/Common/Modal/Modal.types';

export default function Modal({
  width,
  visible,
  children,
  onClick,
}: ModalProp) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner width={width}>
          <ModalCloseBtn onClick={onClick}>
            <FaTimes color="#000" />
          </ModalCloseBtn>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}
