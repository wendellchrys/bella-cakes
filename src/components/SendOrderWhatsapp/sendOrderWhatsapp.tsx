import { CartItem } from '@/types';
import { convertPriceToNumber } from '@/utils/convertPriceToNumber';
import { formatPrice } from '@/utils/formatPrice';

type CartItems = CartItem[];

export const sendOrderWhatsApp = (items: CartItems, total: string): void => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP;

  const generateOrderMessage = (items: CartItems, total: string): string => {
    let message = 'Olá, gostaria de fazer o seguinte pedido:\n\n';
    items.forEach((item) => {
      const itemVariation = item.productVariation && item.productVariation.attributes.length > 0
                            ? `- Tamanho ${item.productVariation.attributes[0].option}`
                            : '';
      message += `*Item*: ${item.name} ${itemVariation}, *Quantidade*: ${item.quantity}, *Preço*: ${formatPrice(Number((item.productVariation ? item.productVariation.price : item.price)) * item.quantity)}\n\n`;
    });
    message += `*Total do Pedido*: ${formatPrice(convertPriceToNumber(total))}`;
    return encodeURIComponent(message);
  };

  const message = generateOrderMessage(items, total);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
