import React from 'react';
import * as FooterStyles from './styled';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const items = useCart((state) => state.items);

  return (
    <FooterStyles.Container>
      <FooterStyles.Copyright>Desenvolvido por WC.DEV</FooterStyles.Copyright>
      {(isMobile && items.length > 0) && (
        <Link href="/carrinho" passHref>
          <FooterStyles.MobileCartButton>
            <FooterStyles.CartIconWrapper>
              Carrinho <FooterStyles.CartIcon />
            </FooterStyles.CartIconWrapper>
          </FooterStyles.MobileCartButton>
        </Link>
      )}
    </FooterStyles.Container>
  );
};

export default Footer;
