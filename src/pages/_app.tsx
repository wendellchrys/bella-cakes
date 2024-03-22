import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify';
import Layout from '../containers/Main'

import Loader from '@/components/Loader'
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from '../styles/main'
import theme from '../styles/theme'


//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });

  }, [Router])

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((r) => r.json()) }}>
            {isLoading ? <Loader /> :
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            }
          </SWRConfig>
          <GlobalStyle />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
