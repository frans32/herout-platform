import Header from "../components/Header";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Header transparent />
        <div style={{ background: "#efefef", height: "450px" }}></div>
        <Link href="/artikel">
          <a>Artikel</a>
        </Link>
      </div>
      <Head>
        <meta name="theme-color" content="#111" />
      </Head>
    </>
  );
}
