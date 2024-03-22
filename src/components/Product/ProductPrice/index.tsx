import React, { FC } from 'react'
import * as ProductPriceStyles from './styled'
import useSwr from 'swr'
import { Product, Variations } from '../../../types'
import { Loader } from '../../../styles/utils'
import { filteredVariantPrice, getSingleProduct } from '../../../utils/functions'
import { findPriceRange, formatPrice } from '@/utils';

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

  const { sale_price, regular_price } = getSingleProduct(product.id, data)

  return (
    <ProductPriceStyles.Wrapper center={center}>
      {!sale_price ? (
        <ProductPriceStyles.Regular isOnSale={false} size={size}>
          {variations && findPriceRange(variations)}
          {!variations && formatPrice(regular_price)}
        </ProductPriceStyles.Regular>
      ) : (
        <>
          <ProductPriceStyles.Regular isOnSale={true} size={size}>
            {/* {variations && filteredVariantPrice(variations)} */}
            {!variations && formatPrice(regular_price)}
          </ProductPriceStyles.Regular>
          <ProductPriceStyles.Sale size={size}>
            {/* {variations && filteredVariantPrice(variations)} */}
            {!variations && formatPrice(sale_price)}
          </ProductPriceStyles.Sale>
        </>
      )}
    </ProductPriceStyles.Wrapper>
  )
}

export default ProductPrice
