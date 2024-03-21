import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, Variations } from '../../types'

export type ProductsArray = Product[]

export type CartItem = Product & {
  quantity: number
  productVariation?: Variations
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  updateItemQuantity: (id: string, quantity: number) => void
  isUpdating: boolean
  setIsUpdating: (isUpdating: boolean) => void
}

export const useCart = create(
  persist<CartState>(
    (set) => ({
      items: [],
      isUpdating: false,
      setIsUpdating: (isUpdating: boolean) => set(() => ({ isUpdating })),
      addItem: (item: CartItem) =>
        set((state: { items: any[] }) => {
          const itemIndex = state.items.findIndex((i: { id: any }) => i.id === item.id)
          if (itemIndex > -1) {
            // Item já existe, apenas atualize a quantidade
            let newItems = state.items.map((i: { quantity: any }, index: any) =>
              index === itemIndex ? { ...i, quantity: i.quantity + item.quantity } : i,
            )
            return { items: newItems }
          } else {
            // Item não existe, adicione ao carrinho
            return {
              items: [...state.items, { ...item, quantity: item.quantity || 1 }],
            }
          }
        }),
      removeItem: (item: CartItem) =>
        set((state: { items: any[] }) => ({
          items: state.items.filter((product: { id: any }) => product.id !== item.id),
        })),
      updateItemQuantity: (id: string, quantity: number) =>
        set((state: CartState) => ({
          items: state.items.map((item: CartItem) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
          ),
        })),
    }),
    {
      name: 'cartItems',
      partialize: (state: any) => state, // Return the complete CartState object
    },
  ),
)

export const isInCart = (id: string): boolean => {
  const items = useCart.getState().items
  return items.some((item: CartItem) => item.id === id)
}
