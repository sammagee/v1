import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'
import Layout from '../../components/layout'
import { getSortedData } from '../../lib/content'

export default function Work({
  projects
}: {
  projects: {
    date: string,
    description: string,
    id: string,
    image: string,
    link: string,
    tags: string,
    title: string,
  }[]
}) {
  return (
    <>
      <Head>
        <title>Work &ndash; Sam Magee</title>
      </Head>

      <Layout>
        <section className="container px-8 py-48 mx-auto space-y-8">
          <h1 className="text-5xl font-bold leading-none text-center text-white">
            Work
          </h1>

          <div className="flex flex-wrap items-start justify-center -mx-4">
            {projects.map(project => (
              <a
                href={project.link}
                className="flex-grow-0 block w-full mx-4 mb-8 text-white rounded-lg shadow-lg flex-no-shrink hover:shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4 rise group"
                key={project.id}
              >
                <article className="p-8 transition duration-200 ease-in-out bg-gray-900 rounded-lg group-hover:shadow-outline group-focus:shadow-outline">
                  <Image
                    className="w-full h-auto transition-all duration-200 ease-in-out rounded-lg shadow-lg group-hover:filter-none group-focus:filter-none filter-grayscale"
                    src={project.image}
                    alt={project.title}
                    width="1920"
                    height="1080"
                  />
                  <h3 className="mt-4 text-2xl">
                    {project.title}
                  </h3>
                  <Date className="text-gray-400" dateString={project.date} />
                  <div className="py-2 text-sm text-gray-200">
                    {project.description}
                  </div>
                  {project.tags && (
                    <div className="flex flex-wrap mt-4 -m-2">
                      {project.tags.split(', ').map(tag => (
                        <span className="inline-flex items-center px-3 py-1 mx-1 my-1 text-sm bg-gray-800 rounded-full">
                          <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                          <span className="inline-block mt-1 ml-2 leading-none">{tag.toLowerCase()}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </a>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getSortedData('projects')

  return {
    props: {
      projects
    }
  }
}
