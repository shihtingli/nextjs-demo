import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { ICat } from '../../types/cat'
import { CatRepoImpl } from '../../repo/cat-repo'
import { establishConnection } from '../../middleware/mongoose'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'

export default function CatsSwr() {
  const getNewCats = async () => {
    const res = await fetch(`http://localhost:3000/api/cat`)
    let cats = await res.json()
    return cats
  }

  const { data: cats, error } = useSWR('123', getNewCats)

  if (error) return 'error..'

  if (!cats) return <div style={{ margin: '200px', textAlign: 'center' }}>loading...</div>

  return (
    <Layout home={false}>
      {console.log(cats)}
      <h1 style={{ textAlign: 'center' }}>Show Cats: SWR </h1>
      <ul>
        {cats.length > 0
          ? cats.map((element, index) => {
              return <li key={index}>{element.name}</li>
            })
          : ''}
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
