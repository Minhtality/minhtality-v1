import Head from 'next/dist/shared/lib/head';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './ThemeConfig';
import { DarkIcon, LightIcon } from '../public/icons';

const ToggleTheme = styled.button`
/* Look into animating svg */
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  cursor: pointer;
  svg {
    ${({ theme }) => theme === 'light' ? `
      fill: #fff;
      stroke: #363537;` : 
      `
      fill:#fafafa;
      stroke: #fafafa`};
    stroke-width: 2px;
  }
`;

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };

  return (
    <>
      <Head>
      <html lang='en'/>
      <title>Minhtality</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap" rel="stylesheet"></link>
    </Head>
    <div>
      {/* <Navigation /> */}
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleTheme theme={theme} onClick={toggleTheme} aria-label="theme toggle">{theme === 'light' ? <DarkIcon/> : <LightIcon/>}</ToggleTheme>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
    </>
  )
}