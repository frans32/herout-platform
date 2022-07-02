import styles from "../styles/Artikel.module.css";

import Header from "../components/Header";
import PageViews from "../components/PageViews";

import Image from "next/image";

import imgPlaceholder from "../utils/imgPlaceholder";

export const getStaticProps = async () => {
  let image = await imgPlaceholder("oorlog.jpg");
  let post = {
    imageBlur: image.base64,
    imageWidth: image.width,
    imageHeight: image.height,
  };

  return {
    props: {
      post,
    },
  };
};

export default function Artikel({ post }) {
  return (
    <>
      <Header fixed padded />

      <section className={styles.headline}>
        <div className={styles.headlineCategory}>Aktueel</div>
        <h1>Wat probeer Vladimir Putin bereik?</h1>
        <h2>Die oorsake en gevolge van die oorlog in Oekraïne</h2>
        <div className={styles.headlineAuthor}>Karen Vergeest</div>
      </section>

      <section className={styles.heroImage}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url("${post.imageBlur}")` }}
        >
          <Image
            width={post.imageWidth}
            height={post.imageHeight}
            priority
            sizes="100vw"
            src="/images/oorlog.jpg"
          />
        </div>
      </section>

      <div className={styles.contentContainer}>
        <section className={styles.info}>
          <div>Foto: Emma Snyman</div>
          <div className={styles.share}>
            <PageViews page="die-stokperdjie-verg-rots-moed" />
            <img
              src="/icons/share.svg"
              alt="Deel"
              onClick={async () => {
                try {
                  await navigator.share({
                    text: "Learn web development on MDN!",
                    url: window.location.href,
                  });
                } catch {}
              }}
            />
          </div>
        </section>
        <main className={styles.content}>
          <p>
            Hierdie oorlog wat op ’n demokrasie van 44 miljoen mense geloods is,
            is ’n oorsaak van pyn en lyding onder die volk van Oekraïne.
          </p>
          <h1>Heading 1</h1>
          <p>
            Het ons{" "}
            <a
              href="https://google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hier
            </a>{" "}
            ’n herhaling van wat Stalin in 1945 gedoen het toe hy die verswakte
            Oosblok onder Russiese beheer gedwing het? Sien ons iets van die
            Koue Oorlog? Of is daar ander politieke redes vir die Russiese
            optrede, al gaan Rusland se ekonomie die prys betaal?
          </p>

          <h2>Heading 2</h2>
          <p>
            Oekraïne is ’n streek wat oor honderde jare baie konflik beleef het.
            Groot militêre konflikte het dikwels in die land afgespeel sonder
            dat hy direk daarby betrokke was. Daar was nog altyd ’n onstabiele
            grenskonflik tussen Rusland en Oekraïne. Toe Zelenski aangewys is as
            president, het hy ’n hand van vriendskap na NAVO uitgesteek en saam
            met die Europese Unie aan tafel gesit. Hierdie aksie het die
            spanning tussen Rusland en Oekraïne die hoogte laat inskiet.
          </p>
          <h3>Heading 3</h3>
          <p>
            Waarom sou Rusland se lewenslange president hierdie drastiese stap
            neem? Terwyl ek nou skryf, voel dit amper vir my asof daar skaak
            gespeel word.
          </p>
          <p>
            Die eerste skuif is om strategiese toegang tot die Krim-skiereiland
            wat reeds in 2014 geannekseer is, maar geen direkte verbinding met
            Rusland het nie, te verkry. Nou kan Rusland toegang tot sy
            Swartseevloot kry, wat ’n groot strategiese voordeel is.
          </p>
          <p>
            ’n Tweede skuif: 17% van Oekraïne se bevolking is etniese Russe en
            Putin sê hy voel besorg oor hulle.
          </p>
          <p>
            ’n Derde skuif: om beheer oor die industriële en landboupotensiaal
            in Oekraïne te verkry. Voor 1990 was Oekraïne een van die
            welvarendste dele van die USSR.
          </p>
          <p>
            In die geval van Oekraïne het sy toenadering tot die Europese Unie
            en NAVO die vierde skuif in die skaakspel moontlik gemaak en is dit
            waarom Oekraïne volgens Putin ingeval moes word om die regering van
            Zelenski te vervang.
          </p>
          <p>
            Met hierdie skuiwe vermoed ons Putin hoop om uiteindelik “skaakmat”
            te sê. Dit blyk sy ambisie is om die grense van die ou Sowjetunie te
            herstel.
          </p>
          <p>
            Uit die 30 lande wat NAVO vorm, grens vyf lande aan Rusland, wat ’n
            sekuriteitsbedreiging vir Putin is.
          </p>

          <p>
            Daar moet egter aanvaar word dat Rusland ook nie sonder strategiese
            hefbome is nie – hulle weermag is geografies aangrensend en hulle is
            ’n groot olieverskaffer en ’n dominante aardgasverskaffer aan die
            energiehonger Wes-Europa.
          </p>
          <p>
            Dit lok die volgende vraag uit: Wat is die gevolge van hierdie
            oorlog op die res van die wêreld?
          </p>
          <p>
            Die Russiese inval op Oekraïne is die grootste humanitêre krisis wat
            Europa in die gesig staar sedert die Tweede Wêreldoorlog. Dit is ’n
            ongelooflike menslike kwessie van sterftes, vlugtelinge en
            dakloosheid.
          </p>
          <p>
            Die oorlog is ook kommerwekkend vir meer as 25 Afrika-lande wat van
            graan-invoere afhanklik is. Oekraïne verteenwoordig die tweede
            grootste grondgebied in Europa naas Rusland en het uitstekende
            landboupotensiaal. Oekraïne voer ongeveer 40% van die wêreld se
            sonneblomme uit en is ook ’n groot uitvoerder van koring (aan o.a.
            Suid-Afrika) en mielies. Die globale ekonomie word deur stygende
            kommoditeite en dienste geraak. Ru-oliepryse styg oor die wêreld
            heen.
          </p>
          <p>
            Die bogenoemde kwessies skraap slegs die oppervlak. Putin se
            oorlogsplanne het uiteindelik die wêreld se beheptheid met die
            Covid-19-pandemie na die agtergrond geskuif en ’n besinning gebring
            ten opsigte van die wêreld se ekonomiese en politieke kwessies.
          </p>
          <p>
            Terwyl die wêreld van een onsekere stadium na ’n volgende beweeg, is
            dit belangrik om ingelig te bly.
          </p>
        </main>
      </div>
    </>
  );
}
