import styles from "../styles/ContentComponents.module.css";

import Image from "next/image";

export function ContentImage(props) {
  return (
    <figure className={styles.image} style={props.wide ? { padding: 0 } : {}}>
      <Image
        alt={props.alt || ""}
        src={props.src}
        layout="responsive"
        width={2000}
        height={1500}
      />
      {props.caption ? (
        <figcaption>
          <span>{props.caption}</span>
          {props.credit ? <span>Bron: {props.credit}</span> : <span></span>}
        </figcaption>
      ) : (
        <></>
      )}
    </figure>
  );
}
