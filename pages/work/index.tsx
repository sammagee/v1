import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getSortedData } from '../../lib/content'

export default function Work({
  projects
}: {
  projects: {
    id: string,
    date: string
    image: string,
    link: string,
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
          <h2 className="text-5xl font-bold leading-none text-center text-gray-600">
            Work
          </h2>

          <div className="flex flex-wrap justify-center -mx-4">
            {projects.map((project) => (
              <a
                href={project.link}
                className="block w-full mx-4 mb-8 text-white rounded-lg shadow-lg flex-no-shrink hover:shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4 rise group"
                key={project.id}
              >
                <article className="p-8 transition duration-200 ease-in-out bg-gray-900 rounded-lg group-hover:shadow-outline group-focus:shadow-outline">
                  <img className="w-full transition-all duration-200 ease-in-out rounded-lg shadow-lg group-hover:filter-none group-focus:filter-none filter-grayscale" src={project.image} alt={project.title}/>
                  <h3 className="mt-6 text-2xl">
                    {project.title}
                  </h3>
                  <Date className="text-gray-400" dateString={project.date} />
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
