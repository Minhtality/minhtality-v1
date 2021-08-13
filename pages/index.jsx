import Head from 'next/head'
import Link from 'next/link'
import Particles from "../components/Particles";
import * as Styled from '../components/index.styled';

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
      <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
    `}</style>
      <Styled.ParticleStyle>
        <Styled.Card>
          <Styled.CardContainer>
            <Styled.CardFront>
              <Styled.Avatar loading="lazy" src="/images/avatar.jpg"/>
              <Styled.Name>Minh Tran</Styled.Name>
              <Styled.Title>Front-end Developer</Styled.Title>
              <Styled.Location>Los Angeles</Styled.Location>
              <Styled.Socials>
                {socials.map(({id, href, target, src, alt}) => 
                  <a 
                    key={id} 
                    href={href} 
                    target={target}>
                      <Styled.SocialIcons alt={alt} src={src} />
                  </a>
                )}
              </Styled.Socials>
            </Styled.CardFront>
            {/* <Styled.CardBack>
              <div>Just a guy</div>
            </Styled.CardBack> */}
          </Styled.CardContainer>
        </Styled.Card>
        <Particles />
      </Styled.ParticleStyle>
    </div>
  )
};
