import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  const socials = [
    {
      id: 'linkedin',
      src: '/images/linkedin.png',
      href: 'https://www.linkedin.com/in/minh-m-tran/',
      alt: 'linkedIn',
      target: '_blank'
    },
    {
      id: 'github',
      src: '/images/octocat.png',
      href: 'https://github.com/Minhtality',
      alt: 'github',
      target: '_blank'
    },
    {
      id: 'email',
      src: '/images/email.png',
      href: 'mailto:mtran1712@gmail.com',
      alt: 'email',
      target: '_blank'
    },
  ];
  return (
      <div>
        Hello world
      </div>
  )
};
