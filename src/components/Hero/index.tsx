import React from 'react'
import * as HeroStyles from './styled'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <HeroStyles.Wrapper>
      <HeroStyles.Bg>
        <Image
          src={`${process.env.NEXT_PUBLIC_WP_API_URL!}/wp-content/uploads/2024/03/sistema-bella-cakes-banners-01.jpg`}
          width={1920}
          height={500}
          alt="Ovos de Páscoa 2024"
        />
      </HeroStyles.Bg>
    </HeroStyles.Wrapper>
  )
}

export default Hero
