import '../styles/globals.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Bitcoin" />
    <link rel="icon" href="/bitcoin.ico" />
  </Head>;
  return <Component {...pageProps} />
}

export default MyApp
