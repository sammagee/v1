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

        <meta name="description" content={data.description} />
      </Head>

      <article className="container px-8 py-56 mx-auto">
        <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg leading-0 sm:w-1/2 md:w-1/3 group">
          <Image
            className="w-full transition-all duration-200 ease-in-out filter-grayscale group-hover:filter-none"
            src={data.image}
            alt={data.title}
            width={1920}
            height={1080}
          />

          <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-gray-800 rounded-lg bg-opacity-70 group-hover:bg-opacity-0" />
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-none text-center text-white">
          {data.title}
        </h1>

        <div className="flex items-center justify-center mt-2 space-x-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>

            <Date
              className="block mt-1 ml-1 text-gray-500"
              dateString={data.date}
            />
          </div>

          {data.link && (
            <a href={`//${data.link}`} className="flex items-center text-gray-500 transition duration-200 ease-in-out hover:text-gray-300 focus:text-gray-300 group" target="_blank group" rel="noopener noreferrer">
              <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>

              <span className="relative mt-1 ml-1">
                View Project

                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-700 transition duration-200 ease-in-out group-hover:bg-gray-500 group-focus:bg-gray-500" />
              </span>
            </a>)}

          {data.git && (
            <a href={`//${data.git}`} className="flex items-center text-gray-500 transition duration-200 ease-in-out hover:text-gray-300 focus:text-gray-300 group" target="_blank group" rel="noopener noreferrer">
              <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>

              <span className="relative mt-1 ml-1">
                View Code

                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-700 transition duration-200 ease-in-out group-hover:bg-gray-500 group-focus:bg-gray-500" />
              </span>
            </a>)}
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

        <div
          className="mx-auto mt-16 prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </article>
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
