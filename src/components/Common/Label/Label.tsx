import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  id: string;
  children: string | React.ReactNode;
  isRequired?: boolean;
}

const LabelLayout = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.palette.darkGray};
  font-family: ${({ theme }) => theme.fonts.SpoqaHanSansNeo};
`;

const RequiredIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.palette.status.warning};
`;

export default function Label({ id, children, isRequired }: LabelProps) {
  return (
    <LabelLayout htmlFor={id}>
      {children}
      {isRequired && <RequiredIcon>*</RequiredIcon>}
    </LabelLayout>
  );
}

Label.defaultProps = {
  isRequired: false,
};
