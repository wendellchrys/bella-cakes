import Head from 'next/head'
import React from 'react'

interface CustomHeadProps { }

const baseInfo = {
  author: 'WC.DEV',
  titlePrefix: 'WC.DEV',
  name: 'bellacakes.com.br',
  url: 'https://bellacakes.com.br',
  description: 'Ovos de Páscoa em Goiânia',
  keywords: `Ovos de pascoa, pascoa`,
}

const Seo: React.FC<CustomHeadProps> = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={baseInfo.description} />
      <meta property="og:url" content={baseInfo.url} />
      <meta property="og:site_name" content={baseInfo.name} />
      <meta name="author" content={baseInfo.author} />
      <meta name="keywords" content={baseInfo.keywords} />
    </Head>
  )
}

export default Seo
