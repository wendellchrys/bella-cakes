import React, { useRef } from 'react'
import * as AddToCartFormStyles from './styled'
import { useCart } from '@/hooks/use-cart'
import { useToast } from '@/components/UseToast';
import { Product, Variations } from '../../../types'

interface AddToCartFormProps {
  product: Product
  variation?: Variations
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ product, variation }) => {
  const { addItem, isUpdating, setIsUpdating } = useCart()
  const quantityRef = useRef<HTMLInputElement>(null)

  const { showToast } = useToast();

  const handleAddToCart = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (product.variations.length > 0 && !variation) {
      showToast(`Selecione uma variação do produto!`, 'error');
      return;
    }
    let quantity = quantityRef.current ? parseInt(quantityRef.current.value) : 1;
    quantity = quantity > 0 ? quantity : 1;

    setIsUpdating(true);

    try {
      addItem({
        id: String(variation ? variation.id : product.id),
        quantity,
        name: product.name,
        featured: product.featured,
        type: product.type,
        status: product.status,
        images: product.images,
        price: product.price,
        regular_price: product.regular_price,
        sale_price: product.sale_price,
        short_description: product.short_description,
        description: product.description,
        categories: product.categories,
        variations: product.variations,
        productVariation: variation
      });

      showToast(`${product.name} adicionado com sucesso!`, 'success');
      setIsUpdating(false);

    } catch (error) {
      // console.error(error);
      setIsUpdating(false);
    }
  };

  return (

    <AddToCartFormStyles.Form>
      <AddToCartFormStyles.InputField type="number" defaultValue="1" min="1" ref={quantityRef} />
      <AddToCartFormStyles.Btn disabled={isUpdating} onClick={handleAddToCart}>
        {isUpdating ? 'Carregando...' : 'Adicionar'}
      </AddToCartFormStyles.Btn>
    </AddToCartFormStyles.Form>
  )
}

export default AddToCartForm
