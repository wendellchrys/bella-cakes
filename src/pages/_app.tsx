import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import Layout from '../containers/Main'
import GlobalStyle from '../styles/main'
import theme from '../styles/theme'
import '../styles/global.css';


import type { AppProps } from 'next/app'

//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((r) => r.json()) }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
          <GlobalStyle />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
