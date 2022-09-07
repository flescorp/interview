import React from 'react';
import Title from '@/components/Common/Title/Title';
import Mask from '@/styles/Mask.styled';

interface LayoutProp {
  title: string | undefined;
  children: React.ReactNode;
}

function TitleMask({ title, children, ...props }: LayoutProp) {
  return (
    <div {...props}>
      <Title title={title} />
      <Mask>{children}</Mask>
    </div>
  );
}

export default TitleMask;
