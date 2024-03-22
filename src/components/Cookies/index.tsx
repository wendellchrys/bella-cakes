import Link from 'next/link'
import React from 'react'
import CookieConsent from 'react-cookie-consent'

interface CookiesConsentProps { }

const CookiesConsent: React.FC<CookiesConsentProps> = () => {
  return (
    <>
      <CookieConsent
        buttonText="Aceito!"
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
        }}
        buttonStyle={{
          textAlign: 'center',
          background: '#954732',
          borderRadius: '20px',
          color: '#fff',
          fontSize: '17px',
          fontWeight: '600',
          padding: '5px 40px',
        }}
      >
        Este site utilize cookies para um melhor funcionamento, você pode ver mais detalhes <Link href="/cookies"><span style={{ color: '#cecece', cursor: 'pointer' }}>clicando aqui.</span></Link>
      </CookieConsent>
    </>
  )
}

export default CookiesConsent
