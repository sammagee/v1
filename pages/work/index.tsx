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
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
            >
              <a className="flex-grow-0 block w-full mx-4 mb-8 text-white rounded-lg shadow-lg flex-no-shrink hover:shadow-xl hover:ring ring-primary-400 ring-opacity-50 focus:ring sm:w-1/2 md:w-1/3 lg:w-1/4 rise group">
                <article className="p-8 transition duration-200 ease-in-out bg-gray-900 rounded-lg">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-lg leading-0">
                    <Image
                      className="w-full transition-all duration-200 ease-in-out group-hover:filter-none group-focus:filter-none filter-grayscale"
                      src={project.image}
                      alt={project.title}
                      width={1920}
                      height={1080}
                    />

                    <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-gray-800 bg-opacity-70 group-hover:bg-opacity-0" />
                  </div>

                  <h3 className="mt-4 text-2xl">
                    {project.title}
                  </h3>

                  <Date
                    className="text-gray-400"
                    dateString={project.date}
                  />

                  <div className="py-2 text-sm text-gray-300">
                    {project.description}
                  </div>

                  {project.tags && (
                    <div className="flex flex-wrap mt-4 -m-2">
                      {project.tags.split(', ').map(tag => (
                        <span className="inline-flex items-center px-3 py-1 mx-1 my-1 text-sm bg-gray-800 rounded-full" key={tag}>
                          <span className="w-2 h-2 bg-gray-900 rounded-full shadow-inner"></span>
                          <span className="inline-block mt-1 ml-2 leading-none">{tag.toLowerCase()}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </a>
            </Link>
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
