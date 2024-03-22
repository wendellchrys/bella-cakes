import React from 'react'
import * as HeroStyles from './styled'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <HeroStyles.Wrapper>
      <HeroStyles.Bg>
        <Image
          src="./banner.jpg"
          width={1920}
          height={500}
          alt="Ovos de Páscoa 2024"
        />
      </HeroStyles.Bg>
    </HeroStyles.Wrapper>
  )
}

export default Hero
