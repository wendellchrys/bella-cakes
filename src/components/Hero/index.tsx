import React from 'react';
import * as HeroStyles from './styled';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Hero: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // URL e dimensões da imagem para dispositivos móveis
  const mobileImageUrl = `${process.env.NEXT_PUBLIC_WP_API_URL!}/wp-content/uploads/2024/03/sistema-bella-cakes-banners-02.jpg`;
  const mobileImageWidth = 500;
  const mobileImageHeight = 700;

  // URL e dimensões da imagem para desktop
  const desktopImageUrl = `${process.env.NEXT_PUBLIC_WP_API_URL!}/wp-content/uploads/2024/03/desktop-banner.jpg`;
  const desktopImageWidth = 1920;
  const desktopImageHeight = 500;

  return (
    <HeroStyles.Wrapper>
      <HeroStyles.Bg>
        <Image
          src={isMobile ? mobileImageUrl : desktopImageUrl}
          width={isMobile ? mobileImageWidth : desktopImageWidth}
          height={isMobile ? mobileImageHeight : desktopImageHeight}
          alt="Ovos de Páscoa 2024"
        />
      </HeroStyles.Bg>
    </HeroStyles.Wrapper>
  );
};

export default Hero;
