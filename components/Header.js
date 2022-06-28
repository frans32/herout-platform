import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header(props) {
  let headerClasses = styles.header;
  if (props.dark) headerClasses += " " + styles.dark;
  if (props.transparent) headerClasses += " " + styles.transparent;
  if (props.fixed) headerClasses += " " + styles.fixed;

  return (
    <div className={props.padded ? styles.padder : ""}>
      <header className={headerClasses}>
        <div>
          <img src="/icons/search.svg" className={styles.block} alt="Soek" />
        </div>
        <Link href="/">
          <a className={styles.block}>
            <img
              className={styles.block}
              src="/assets/herout-outline.svg"
              alt="Herout"
            ></img>
          </a>
        </Link>
        <div>
          <img className={styles.block} src="/icons/menu.svg" />
        </div>
      </header>
    </div>
  );
}
