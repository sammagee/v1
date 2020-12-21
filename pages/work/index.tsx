import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getSortedData } from '../../lib/content'

export default function Work({
  projects
}: {
  projects: {
    contentHtml: string,
    date: string,
    description: string,
    descriptionHtml: string,
    id: string,
    image: string,
    link: string,
    git: string,
    tags: string,
    title: string,
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>Work &ndash; Sam Magee</title>
      </Head>

      <section className="container px-8 py-56 mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-center text-white">
          Work
        </h1>

        <div className="flex flex-wrap items-start justify-center -mx-4">
          {projects.map(project => (
            <article
              key={project.id}
              className="flex-grow-0 block w-full mx-4 mb-8 text-white rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 flex-no-shrink group"
            >
              <div className="overflow-hidden transition duration-200 ease-in-out bg-gray-900 rounded-lg">
                <div className="p-8">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-lg leading-0">
                    <Image
                      className="w-full transition-all duration-200 ease-in-out group-hover:filter-none group-focus:filter-none filter-grayscale"
                      src={project.image}
                      alt={project.title}
                      width={1920}
                      height={1080}
                    />

                    <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-gray-800 rounded-lg bg-opacity-70 group-hover:bg-opacity-0" />
                  </div>

                  <div className="flex items-start justify-between mt-4">
                    <h3 className="text-2xl">
                      <Link
                        href={`/projects/${project.id}`}
                        key={project.id}
                      >
                        <a className="text-white transition duration-200 ease-in-out hover:text-gray-400 focus:text-gray-400">
                          {project.title}
                        </a>
                      </Link>
                    </h3>

                    <div className="flex items-center h-8 ml-4 space-x-3 flex-no-shrink">
                      {project.link && (
                        <a className="inline-flex items-center text-gray-600 transition duration-200 ease-in-out hover:text-gray-500 focus:text-gray-500" title="View Project" href={`//${project.link}`} target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </a>)}

                      {project.git && (
                        <a className="inline-flex items-center text-gray-600 transition duration-200 ease-in-out hover:text-gray-500 focus:text-gray-500" title="View Code" href={`//${project.git}`} target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>)}
                    </div>
                  </div>

                  <Date
                    className="text-gray-400"
                    dateString={project.date}
                  />

                  <div className="py-2 text-sm text-gray-300">
                    {project.description}
                  </div>

                  {project.tags && (
                    <div className="flex flex-wrap mt-2 -m-2">
                      {project.tags.split(', ').map(tag => (
                        <span className="inline-flex items-center px-3 py-1 mx-1 my-1 text-sm bg-gray-800 rounded-full" key={tag}>
                          <span className="w-2 h-2 bg-gray-900 rounded-full shadow-inner"></span>
                          <span className="inline-block mt-1 ml-2 leading-none">{tag.toLowerCase()}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getSortedData('projects')

  return {
    props: {
      projects
    }
  }
}
