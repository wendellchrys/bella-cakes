import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'
import CartPageContainer from '../containers/Cart'

interface CartPageProps { }

const CartPage: NextPage<CartPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Carrinho | Bella Cakes"
        description="Ovos de Páscoa, bolos e doces personalizados!"
      />
      <CartPageContainer />
    </>
  )
}

export default CartPage
