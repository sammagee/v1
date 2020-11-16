import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html className="bg-yellow-400 text-sm sm:text-base font-sans" lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </Head>
        <body className="bg-gray-900 font-sans min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
