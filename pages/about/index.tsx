import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getData } from '../../lib/content'

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About &ndash; Sam Magee</title>
      </Head>

      <section className="container px-8 py-56 mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-center text-white">
          About
        </h1>

        <div className="flex flex-wrap items-start justify-center -mx-4">
          <article className="prose lg:prose-xl">
            <p>I'm a full-stack devsigner (developer & designer), currently based in WDM, IA. I've gone to school at Central College, and plan to begin my Master's program at Vanderbilt University in May of 2021.</p>

            <p>I've worked at the following places:</p>
            <ul>
              <li><a href="//imtins.com" target="_blank" rel="noopener noreferrer">IMT Insurance</a></li>
              <li><a href="//leantech.com" target="_blank" rel="noopener noreferrer">Lean Tech</a></li>
            </ul>

            <p>... and of course I've built my own projects, <Link href="/work"><a>which you can find here</a></Link>.</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}
