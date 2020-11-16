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
