import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Minhtality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="/posts/test-post">Work in progress...</Link>
        </h1>
      </main>

    </div>
  )
}
