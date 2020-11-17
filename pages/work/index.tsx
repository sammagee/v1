import { GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getSortedData } from '../../lib/content'

export default function Work({
  allData
}: {
  allData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <>
      <Head>
        <title>Work &ndash; Sam Magee</title>
      </Head>

      <Layout>
        <div className="container px-8 py-48 mx-auto space-y-8">
          <div>
            <h2 className="text-5xl font-bold text-gray-700">Projects</h2>
          </div>
          <ul>
            {allData.map(({ id, date, title }) => (
              <li key={id}>
                <span>{title}</span>
                <br />
                <small>
                <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allData = getSortedData('projects')

  return {
    props: {
      allData
    }
  }
}
