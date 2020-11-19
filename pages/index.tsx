import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../components/date'
import Layout from '../components/layout'
import Me from '../components/me'
import { getSortedData } from '../lib/content'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sam Magee &ndash; Fullstack Devsigner</title>
      </Head>

      <div className="relative flex items-center justify-center h-screen overflow-x-hidden">
        <hgroup className="z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Sam Magee</h1>
          <h2 className="flex items-center mt-2 text-xl font-bold text-gray-500">
            <span className="text-gray-600">currently @</span>
            &nbsp;
            <a className="transition duration-200 ease-in-out hover:text-gray-300" href="https://imtins.com" target="_blank" rel="noopener noreferrer">
              <span>IMT Insurance</span>
            </a>
          </h2>
        </hgroup>

        <Me className="absolute bottom-0 mx-auto" />
      </div>
    </Layout>
  )
}
