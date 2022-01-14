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
      <Head>
        <title>Minhtality</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        Hello world
      </div>
    </div>
  )
};
