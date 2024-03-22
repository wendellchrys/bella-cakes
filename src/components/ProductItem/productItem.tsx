import { CartItem } from '@/types';
import { QuantitySelector } from '@/components/QuantitySelector';
import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/utils/formatPrice';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

import * as ProductItemStyles from './styles';


export type PaymentInfoProps = {
  number: string;
  flag: string | null;
  img: string | null;
  purchaseDate: string;
};

export const ProductItem = (item: CartItem) => {
  const { removeItem, updateItemQuantity } = useCart();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

  const handleQuantityChange = (quantity: number) => {
    updateItemQuantity(item.id, quantity);
  };

  return (
    <ProductItemStyles.Container>
      {/* <ProductItemStyles.Image>
        <Image
          src={item.images[0].src}
          width={100}
          height={100}
          alt={item.name}
        />
      </ProductItemStyles.Image> */}
      <ProductItemStyles.FlexRow>
        <ProductItemStyles.Info>
          <ProductItemStyles.Name>
            {item.name} - Tamanho: {item.productVariation?.attributes[0].option}
          </ProductItemStyles.Name>
          <ProductItemStyles.Price>{formatPrice(Number(item.productVariation ? item.productVariation.price : item.price))}</ProductItemStyles.Price>
        </ProductItemStyles.Info>
        <ProductItemStyles.Info>
          <QuantitySelector
            maxQuantity={15}
            initialQuantity={item.quantity}
            onQuantityChange={(q) => handleQuantityChange(q)}
          />
          <ProductItemStyles.RemoveButton onClick={() => removeItem(item)}>
            <FaTrash /> Remover
          </ProductItemStyles.RemoveButton>
        </ProductItemStyles.Info>
      </ProductItemStyles.FlexRow>

    </ProductItemStyles.Container>
  );
};
