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
          <div className="flex items-start mt-2">
            <h2 className="flex items-center text-xl font-bold text-gray-600">
              currently @
              &nbsp;
            </h2>
            <h2 className="text-xl font-bold text-left text-gray-500">
              <a className="relative text-gray-500 transition duration-200 ease-in-out hover:text-gray-300 focus:text-gray-300 group" href="//imtins.com" target="_blank" rel="noopener noreferrer">
                <span>IMT Insurance</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-700 transition duration-200 ease-in-out group-hover:bg-gray-500 group-focus:bg-gray-500"></span>
              </a>,<br />
              <a className="relative text-gray-500 transition duration-200 ease-in-out hover:text-gray-300 focus:text-gray-300 group" href="//vanderbilt.edu" target="_blank" rel="noopener noreferrer">
                <span>Vanderbilt</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-700 transition duration-200 ease-in-out group-hover:bg-gray-500 group-focus:bg-gray-500"></span>
              </a>
              &nbsp;
              <span className="text-gray-600">(soon)</span>
            </h2>
          </div>
        </hgroup>

        <Me className="absolute bottom-0 mx-auto" />
      </div>
    </Layout>
  )
}
