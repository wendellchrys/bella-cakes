import { CartItem } from '@/types';
import { Button, ButtonProps } from '@/components/Button';
import { useCart } from '@/hooks/use-cart';
import React from 'react';
import { BsFillCaretUpFill } from 'react-icons/bs';

type CartButtonProps = {
  item: CartItem;
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

export const CartButton = ({
  item,
  size = 'small',
  hasText = true,
}: CartButtonProps) => {

  // Acesso ao estado e ações do carrinho
  const addItem = useCart((state) => state.addItem);

  const handleCart = () => {
    return (
      addItem(item),
      alert('Produto adicionado ao carrinho')
    );
  };

  return (
    <Button
      icon={<BsFillCaretUpFill />}
      size={size}
      onClick={() => handleCart()}
      aria-label="Comprar"
    >
      {hasText && 'Comprar'}
    </Button>
  );
};
