import Header from "../components/Header";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Header transparent />
        <div style={{ background: "#efefef", height: "450px" }}></div>
        <img src="/screenshot.png" style={{ width: "100%" }} />
      </div>
      <Head>
        <meta name="theme-color" content="#111" />
      </Head>
    </>
  );
}
