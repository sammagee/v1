import Date from '../../components/date'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import { getAllIds, getData } from '../../lib/content'

export default function Details({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title} &ndash; Sam Magee</title>
      </Head>

      <section className="container px-8 py-56 mx-auto">
        <div className="w-full mx-auto overflow-hidden rounded-lg shadow-lg leading-0 sm:w-1/2 md:w-1/3">
          <Image
            className="w-full transition-all duration-200 ease-in-out hover:filter-none focus:filter-none filter-grayscale"
            src={data.image}
            alt={data.title}
            width={1920}
            height={1080}
          />
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-none text-center text-white">
          {data.title}
        </h1>

        <div className="flex items-center justify-center mt-2 space-x-6">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>

            <Date
              className="block mt-1 ml-1 text-gray-400"
              dateString={data.date}
            />
          </div>

          <a href={`//${data.link}`} className="flex items-center text-gray-400 transition duration-200 ease-in-out hover:text-white focus:text-white" target="_blank">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>

            <span className="mt-1 ml-1">{data.link}</span>
          </a>
        </div>

        <div className="flex justify-center w-full mx-auto mt-4 sm:w-2/3 md:w-1/3">
          {data.tags && (
            <div className="flex flex-wrap justify-center -m-2">
              {data.tags.split(', ').map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 mx-1 my-1 text-sm bg-gray-900 rounded-full">
                  <span className="w-2 h-2 bg-gray-800 rounded-full shadow-inner"></span>
                  <span className="inline-block mt-1 ml-2 leading-none text-gray-400">{tag.toLowerCase()}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="w-full py-6 mx-auto text-center text-gray-200 sm:w-2/3 md:w-1/3">
          <p><strong>TL;DR</strong> &ndash; {data.description}</p>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllIds('projects')

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getData('projects', params.id)

  return {
    props: {
      data
    }
  }
}
