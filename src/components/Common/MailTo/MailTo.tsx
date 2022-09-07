import React from 'react';
import Link from 'next/link';

interface MailToProps {
  email: string;
}

export default function MailTo({ email }: MailToProps) {
  const mailToStr = `mailto:${email}`;
  return (
    <Link href={mailToStr} passHref>
      <a href={mailToStr}>Email: {email}</a>
    </Link>
  );
}
