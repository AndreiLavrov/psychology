import Head from 'next/head'
import ChatGPT from 'src/sections/chatGPT';
import { Container } from 'src/shared/components/container';

export default function Team() {
  return (
    <>
      <Head>
        <title>Psychology</title>
        <meta name="description" content="Page which give psychological help" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <Container>
          <ChatGPT />
        </Container>
      </main>
    </>
  )
}
