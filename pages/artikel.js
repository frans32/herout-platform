import Header from "../components/Header";

import styles from "../styles/Artikel.module.css";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className={styles.headlineBackground}>
        <Header transparent />
        <p>REDAKSIEBRIEF</p>
        <h1>This is an article title wowowo</h1>
        <small>Die Herout Redaksie</small>
      </div>
    </>
  );
}
