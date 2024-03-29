import Document, { Html, Head, Main, NextScript } from "next/document";

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Shippori+Mincho&family=Spirax&family=Trochut:ital,wght@0,400;0,700;1,400&family=Unica+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
