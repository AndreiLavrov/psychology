import Head from 'next/head'
import TeamPlayer from 'src/sections/teamPlayer';

export default function Team() {
  return (
    <>
      <Head>
        <title>Maryna Laurova</title>
        <meta name="description" content="Page which give psychological help" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <TeamPlayer />
      </main>
    </>
  )
}
