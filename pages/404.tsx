import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 &ndash; Page Not Found</title>
      </Head>

      <section className="relative flex items-center justify-center h-screen overflow-x-hidden">
        <svg className="absolute mx-auto" width="464" height="489" viewBox="0 0 464 489" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="text-gray-900" fill="currentColor" d="M211.521 0.0982128C326.578 3.32512 424.601 83.7784 452.97 195.231C471.866 269.47 472.889 360.217 403.739 429.888C308.333 526.013 177.569 486.521 101.147 440.141C5.14578 371.359 -37.3141 215.37 40.084 89.0804C86.6861 18.548 150.693 -1.60777 211.521 0.0982128Z" />
        </svg>

        <div>
          <h1 className="mt-8 text-6xl font-bold leading-none text-center text-white">
            404
          </h1>

          <Link href="/">
            <a className="inline-flex items-center mt-6 text-gray-400 transition duration-200 ease-in-out hover:text-white">
              <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>

              <span className="mt-1 ml-1">Back to Home</span>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
