import React from 'react';
import * as HeroStyles from './styled';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Hero: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Configuração padrão da imagem para dispositivos móveis
  let imageData = {
    src: `${process.env.NEXT_PUBLIC_WP_API_URL!}/wp-content/uploads/2024/03/sistema-bella-cakes-banners-02.jpg`,
    width: 500,
    height: 700,
    alt: 'Ovos de Páscoa 2024',
  };

  // Se não for um dispositivo móvel, atualiza a configuração da imagem para desktop
  if (!isMobile) {
    imageData = {
      ...imageData,
      src: `${process.env.NEXT_PUBLIC_WP_API_URL!}/wp-content/uploads/2024/03/sistema-bella-cakes-banners-01.jpg`,
      width: 1920,
      height: 500,
    };
  }

  return (
    <HeroStyles.Wrapper>
      <HeroStyles.Bg>
        <Image
          src={imageData.src}
          width={imageData.width}
          height={imageData.height}
          alt={imageData.alt}
        />
      </HeroStyles.Bg>
    </HeroStyles.Wrapper>
  );
};

export default Hero;
