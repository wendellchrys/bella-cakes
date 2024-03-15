import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../../types'

export type ProductsArray = Product[]

export type CartItem = Product & {
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  updateItemQuantity: (id: string, quantity: number) => void
}

export const useCart = create(
  persist<CartState>(
    (
      set: (arg0: {
        (state: any): { items: any }
        (state: any): { items: any }
        (state: any): { items: any }
      }) => any,
    ) => ({
      items: [],
      addItem: (item: CartItem) =>
        set((state: { items: any[] }) => {
          const itemIndex = state.items.findIndex((i: { _id: any }) => i._id === item._id)
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
          items: state.items.filter((product: { _id: any }) => product._id !== item._id),
        })),
      updateItemQuantity: (id: string, quantity: number) =>
        set((state: { items: any[] }) => ({
          items: state.items.map((item: { _id: string }) =>
            item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
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
  return items.some((item: { _id: string }) => item._id === id)
}
