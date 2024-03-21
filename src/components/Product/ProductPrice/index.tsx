import React, { FC } from 'react'
import * as ProductPriceStyles from './styled'
import useSwr from 'swr'
import { Product, Variations } from '../../../types'
import { Loader } from '../../../styles/utils'
import { filteredVariantPrice, getSingleProduct } from '../../../utils/functions'
import { findPriceRange } from '@/utils/findPriceRange'

interface ProductPriceProps {
  product: Product
  center: boolean
  size: number
  variations: Variations[]
}

const ProductPrice: FC<ProductPriceProps> = ({ product, variations, center, size }) => {
  const { data } = useSwr(`/api/products/retrieve`)

  if (!data) {
    return <Loader />
  }

  console.log('variation', variations)

  const { sale_price, regular_price } = getSingleProduct(Number(product.id), data)

  return (
    <ProductPriceStyles.Wrapper center={center}>
      {!sale_price ? (
        <ProductPriceStyles.Regular isOnSale={false} size={size}>
          {variations && findPriceRange(variations)}
          {!variations && parseFloat(regular_price).toFixed(2)}
        </ProductPriceStyles.Regular>
      ) : (
        <>
          <ProductPriceStyles.Regular isOnSale={true} size={size}>
            {/* {variations && filteredVariantPrice(variations)} */}
            {!variations && parseFloat(regular_price).toFixed(2)}
          </ProductPriceStyles.Regular>
          <ProductPriceStyles.Sale size={size}>
            {/* {variations && filteredVariantPrice(variations)} */}
            {!variations && parseFloat(sale_price).toFixed(2)}
          </ProductPriceStyles.Sale>
        </>
      )}
    </ProductPriceStyles.Wrapper>
  )
}

export default ProductPrice
