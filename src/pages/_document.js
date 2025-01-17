import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
            <title>Kheek</title>
            <meta name="description" content="Kheek Lab" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
