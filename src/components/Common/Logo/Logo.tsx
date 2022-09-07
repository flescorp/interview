import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/img-logo.png';

interface LogoType {
  link: string;
  width: string | number;
  height: string | number;
}

export default function Logo({ ...props }: LogoType) {
  const { link = '/', width = 106, height = 33 } = props;

  return (
    <Link href={link}>
      <a href={link}>
        <Image src={logo} alt="Draft Note" width={width} height={height} />
      </a>
    </Link>
  );
}
