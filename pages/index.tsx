import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../components/date'
import Layout from '../components/layout'
import { getSortedData } from '../lib/content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Magee &ndash; Fullstack Devsigner</title>
      </Head>

      <Layout>
        <div className="flex h-screen items-center justify-center bg-me bg-no-repeat bg-bottom">
          <hgroup className="text-center">
            <h1 className="font-bold text-white text-5xl">Sam Magee</h1>
            <h2 className="font-bold text-gray-500 text-xl">
              <span className="text-gray-700">currently @</span>
              {' '}
              <a className="inline-flex items-center hover:text-gray-300 transition duration-200 ease-in-out" href="https://imtins.com" target="_blank">
                IMT Insurance
              </a>
            </h2>
          </hgroup>
        </div>
      </Layout>
    </>
  )
}
