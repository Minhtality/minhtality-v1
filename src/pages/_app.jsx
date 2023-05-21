import React from 'react'
import Head from 'next/dist/shared/lib/head'
import { createGlobalStyle } from 'styled-components'
import Navigation from '@components/Navigation'

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }
  body {
    background: #f0e7db;
    color: rgb(127, 0, 25);
    transition: all 0.25s linear;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  h1, h2, h3 {
    text-decoration-color: rgb(127, 0, 25);
  }
  p, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  button {
    border: none;
    padding: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Minhtality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navigation />
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </>
  )
}
