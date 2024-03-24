import { BasicContainer, SectionTitle } from '../../styles/utils'
import * as CartPageStyles from './styled'
import React, { useContext } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import { CartList } from '@/components/CartList'
import Loader from '@/components/Loader'

interface CartPageProps { }

const CartPageContainer: NextPage<CartPageProps> = () => {
  const { data } = useSWR('/api/products/retrieve')

  if (!data) {
    return <Loader />
  }

  return (
    <BasicContainer>
      <CartPageStyles.Wrapper>
        <CartList />
      </CartPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default CartPageContainer
