import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { ICat } from '../../types/cat'
import { CatRepoImpl } from '../../repo/cat-repo'
import { establishConnection } from '../../middleware/mongoose'

export default function demoSsr({ cats }) {
  return (
    <Layout home={false}>
      {console.log(cats)}
      <h1 style={{ textAlign: 'center' }}>Show Cats: SSR </h1>
      <ul>
        {cats.map((element, index) => {
          return <li key={index}>{element.name}</li>
        })}
      </ul>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  await establishConnection()
  const catRepo = CatRepoImpl.of()
  const cats = await catRepo.getCats()
  console.log(cats)
  return {
    props: {
      cats: JSON.parse(JSON.stringify(cats)),
    },
  }
}
