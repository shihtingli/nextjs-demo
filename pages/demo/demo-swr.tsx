import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import useSWR from 'swr'
import DateString from '../../components/date'

export default function DemoCsr({ data }) {
  const getNewDateFn = async () => {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
    await delay(3000)
    return new Date().toString()
  }
  const { data: showDate, error } = useSWR('123', getNewDateFn)

  if (error) return 'error..'

  if (!showDate) return <div style={{ margin: '200px', textAlign: 'center' }}>loading...</div>

  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 style={{ textAlign: 'center' }}>SWR DEMO</h1>

      <h2>{showDate}</h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
