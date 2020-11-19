import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html className="font-sans text-sm bg-primary-400 sm:text-base" lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </Head>
        <body className="min-h-screen font-sans bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
