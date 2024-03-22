export interface Variations {
  src: any
  image: Variations | undefined
  price: string
  attributes: any
  id: number
  __typename: string
  nodes: Node[]
}

export interface Product {
  name: string
  slug?: string
  id: string
  featured: boolean
  type: string
  status: string
  images: Array<{
    src: string
    alt: string
  }>

  price: string
  regular_price: string
  sale_price: string
  short_description: string
  description: string
  categories: Array<{
    name: string
  }>
  variations: Variations[]
}

export interface Category {
  id: number
  name: string
  image: { [key: string]: string }
  count: { [key: string]: number }
}

export type CartItem = Product & {
  quantity: number
  productVariation?: Variations
}

export interface Cart {
  key: string | null
  timestamp: number
  items: CartItem[]
}

export interface Customer {
  first_name?: string
  last_name?: string
  address_1?: string
  address_2?: string
  city?: string
  state?: string
  postcode?: string
  country?: string
  email?: string
  phone?: string
  customer_note?: string
  shipping?: string
}

export interface Order {
  id: number
  status: string
  total: string
  date_created: string
}

export interface AuthUserData {
  username: string
  password: string
  cartData?: string
}
