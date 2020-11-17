import Head from 'next/head'
import Nav from '../components/nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="description" content="Hey there! My name is Sam Magee. I'm a fullstack developer and designer based in Iowa, but willing to work with anyone, anywhere!" />
        <meta name="keywords" content="sam magee, sam, magee, devsigner, designer, developer, web designer, web developer, full stack, full stack developer, full-stack, fullstack" />
        <meta name="author" content="Sam Magee" />
        <meta name="copyright" content="Sam Magee" />

        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Nav />

      <main>{children}</main>
    </>
  )
}
