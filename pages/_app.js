import "../styles/globals.css";

import Head from "next/head";
import Script from "next/script";

function NextApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noarchive" />
        <meta property="og:site_name" content="Die Herout" />
        <meta
          name="description"
          content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
        />
        <meta
          property="og:description"
          content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
        />
        <link rel="icon" type="image/png" href="/favicon/logo192.png" />
        <link rel="apple-touch-icon" href="/favicon/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <Script src="https://herout.co.za/plausible.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default NextApp;
