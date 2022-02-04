import '../Styles/global.css';
import Head from 'next/dist/shared/lib/head';
import Navigation from '../components/Navigation';

export default function App({ Component, pageProps }) {
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
      <Navigation />
      <Component {...pageProps} />
    </div>
    </>
  )
}