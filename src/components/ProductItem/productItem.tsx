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

  console.log('item', item)

  return (
    <ProductItemStyles.Container>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        {/* <img
          src={item.image.src} // Use your item image property here
          alt={item.name}
          className="h-full w-full object-cover object-center"
        /> */}
      </div>
      <ProductItemStyles.FlexRow>
        <ProductItemStyles.Info>
          <ProductItemStyles.Name>
            {item.name} - Tamanho: {item.productVariation?.attributes[0].option}
          </ProductItemStyles.Name>
          <ProductItemStyles.Price>{formatPrice(Number(item.productVariation ? item.productVariation.price : item.price))}</ProductItemStyles.Price>
          <p className="mt-1 text-sm text-gray-500">{item.status}</p>
        </ProductItemStyles.Info>
        <ProductItemStyles.Info>
          <QuantitySelector
            maxQuantity={15}
            initialQuantity={item.quantity}
            onQuantityChange={(q) => handleQuantityChange(q)}
          />
          <ProductItemStyles.RemoveButton onClick={() => removeItem(item)}>
            Remover
          </ProductItemStyles.RemoveButton>
        </ProductItemStyles.Info>
      </ProductItemStyles.FlexRow>

    </ProductItemStyles.Container>
  );
};
