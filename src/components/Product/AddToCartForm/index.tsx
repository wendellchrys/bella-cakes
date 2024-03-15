import React, { useRef } from 'react'
import * as AddToCartFormStyles from './styled'
import { useCart } from '../../../store/useCart'
import { Product, Variations } from '../../../types'

interface AddToCartFormProps {
  product: Product
  variation?: Variations
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ product, variation }) => {
  const { addItem, isUpdating, setIsUpdating } = useCart() // Assumindo que você tenha a lógica de `isUpdating` dentro do seu `useCart`
  const quantityRef = useRef<HTMLInputElement>(null)

  const handleAddToCart = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let quantity = quantityRef.current ? parseInt(quantityRef.current.value) : 1
    quantity = quantity > 0 ? quantity : 1

    setIsUpdating(true) // Esta função deve ser implementada dentro de `useCart`

    try {
      await addItem({
        _id: String(variation ? variation.id : product.id),
        quantity,
        // Outros campos necessários do seu CartItem
      })

      setIsUpdating(false)
    } catch (error) {
      console.error(error)
      setIsUpdating(false)
    }
  }

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
