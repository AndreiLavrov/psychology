import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          // href="/favicon/favicon.ico"
          href="/logo.svg"
        />

        {/*<link rel="shortcut icon" href="/favicon/favicon.ico" />*/}
        <link rel="shortcut icon" href="/logo.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
