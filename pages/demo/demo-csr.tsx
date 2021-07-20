import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function DemoCsr({ data }) {
  const [showDate, setShowDate] = useState<string>('')
  const getNewDateFn = async () => {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
    await delay(3000)
    setShowDate(new Date().toString())
  }

  useEffect(() => {
    getNewDateFn()
    // preworkService.getPsList().then((data) => setPsList(data))
  }, [])

  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 style={{ textAlign: 'center' }}>CSR DEMO</h1>
      <h2>{showDate}</h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   function delay(ms: number) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
//   }
//   await delay(3000)
//   const data = new Date().toString()
//   return {
//     props: {
//       data,
//     },
//   }
// }

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return {
//     props: {
//       data,
//     },
//   }
// }
