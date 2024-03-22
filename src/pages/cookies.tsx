import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'

import { BasicContainer, SectionTitle } from '../styles/utils'

interface AboutPageProps { }

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Cookies"
        description="Política de Cookies Bella Cakes"
      />
      <BasicContainer>
        <SectionTitle>Política de Cookies</SectionTitle>
        <p>Este site utiliza cookies para melhorar a sua experiência de navegação e para fornecer funcionalidades adicionais, como o carrinho de compras. Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para tornar os sites mais eficientes e personalizados para o usuário.

          Ao continuar a utilizar este site, você concorda com o uso de cookies. Se preferir não aceitar cookies não essenciais, você pode ajustar suas preferências de cookies nas configurações do seu navegador ou optar por não permitir cookies através das configurações do site. No entanto, observe que isso pode afetar a funcionalidade do site e sua experiência de navegação.

          Para obter mais informações sobre como utilizamos cookies e sobre seus direitos de privacidade, consulte nossa Política de Cookies e Privacidade.</p>
      </BasicContainer>
    </>
  )
}

export default AboutPage
