import * as OrderSummaryStyles from './styled'
import React, { useState } from 'react'
import { Cart, CartItem } from '../../types'
import useSWR from 'swr'
import { Loader } from '../../styles/utils'

interface OrderSummaryProps {
  register: any
  errors: any
  cart: Cart
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ register, errors, cart }) => {
  const { data } = useSWR('/api/shipping/retrieve')
  const [shippingCost, setShippingCost] = useState(0)

  if (!data) {
    return <Loader />
  }

  return (
    <OrderSummaryStyles.Wrapper>
      <OrderSummaryStyles.Grid>
        <OrderSummaryStyles.DescriptionTall>Product</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionTall>Subtotal</OrderSummaryStyles.DescriptionTall>
        carrinho
        <OrderSummaryStyles.DescriptionTall>Subtotal</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionWhite shippingOptions={false}>
          total
        </OrderSummaryStyles.DescriptionWhite>

        <OrderSummaryStyles.DescriptionLow>Shipping</OrderSummaryStyles.DescriptionLow>
        <OrderSummaryStyles.DescriptionWhite shippingOptions={true}>
          <OrderSummaryStyles.Values>
            {data?.map((shipping: any) => {
              const decodedCost = JSON.parse(window.atob(shipping.cost.split('.')[1]))
              return (
                <OrderSummaryStyles.Method key={shipping.id}>
                  <OrderSummaryStyles.Radio
                    ref={register({ required: true })}
                    onChange={() => {
                      setShippingCost(decodedCost)
                    }}
                    type="radio"
                    name="shipping"
                    value={JSON.stringify({
                      cost: shipping.cost,
                      method_id: shipping.method,
                      method_title: shipping.title,
                    })}
                  />

                  <OrderSummaryStyles.Label htmlFor="shipping">
                    {shipping.title} {decodedCost > 0 ? ' - $' + decodedCost : ' - Free'}
                  </OrderSummaryStyles.Label>
                </OrderSummaryStyles.Method>
              )
            })}
          </OrderSummaryStyles.Values>
        </OrderSummaryStyles.DescriptionWhite>

        <OrderSummaryStyles.DescriptionTall>Total</OrderSummaryStyles.DescriptionTall>
        <OrderSummaryStyles.DescriptionWhite shippingOptions={false}>
          total
        </OrderSummaryStyles.DescriptionWhite>
      </OrderSummaryStyles.Grid>
      {errors.shipping ? (
        <OrderSummaryStyles.Error>Please select a shipping method</OrderSummaryStyles.Error>
      ) : (
        ''
      )}
    </OrderSummaryStyles.Wrapper>
  )
}

export default OrderSummary
