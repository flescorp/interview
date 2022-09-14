import React from 'react';

interface ModalProp {
  visible: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  height?: number | string;
  width?: number | string;
}

export type { ModalProp };
