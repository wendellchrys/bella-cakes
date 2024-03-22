import React, { useState } from 'react'
import { Product, Variations } from '../../types'
import { BasicGrid, BasicContainer } from '../../styles/utils'
import * as ProductPageStyles from './styled'
import AddToCartForm from '../../components/Product/AddToCartForm'
import ProductPrice from '../../components/Product/ProductPrice'
import { formatPrice } from '@/utils'

interface ProductPageContentProps {
  product: Product
  variations: Variations[]
}

const ProductPageContainer: React.FC<ProductPageContentProps> = ({ product, variations }) => {
  // Estado para a variação selecionada
  const [selectedVariation, setSelectedVariation] = useState<Variations | undefined>(undefined)

  // Lidar com a mudança de seleção de variação
  const handleVariationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const variationId = parseInt(event.target.value, 10);
    const selectedVar = variations.find((variation) => variation.id === variationId);
    setSelectedVariation(selectedVar);
  };

  return (
    <BasicContainer>
      <ProductPageStyles.ContentWrapper>
        <BasicGrid lg={2} md={2} sm={1} xs={1}>
          <ProductPageStyles.ImgWrapper>
            {product.images && (
              <ProductPageStyles.Img src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </ProductPageStyles.ImgWrapper>
          <ProductPageStyles.InfoWrapper>
            <ProductPageStyles.InfoWrapperCol>
              <ProductPageStyles.Name>{product.name}</ProductPageStyles.Name>
              <ProductPrice product={product} variations={variations} center={false} size={1.3} />
              <ProductPageStyles.ShortDescription
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
              {variations.length > 0 && (
                <ProductPageStyles.VariationsContainer>
                  <label>Escolha uma Variação:</label>
                  <ProductPageStyles.RadioWrapper>
                    {variations.map((variation) => (
                      <ProductPageStyles.RadioLabel key={variation.id}>
                        <ProductPageStyles.RadioButton
                          type="radio"
                          name="product-variations"
                          value={variation.id}
                          onChange={handleVariationChange}
                        />
                        {variation.attributes
                          .map((attr: { name: string; option: string }) => `${attr.name}: ${attr.option}`)
                          .join(', ')}{' '}
                        - <ProductPageStyles.Price>{formatPrice(Number(variation.price))}</ProductPageStyles.Price>
                      </ProductPageStyles.RadioLabel>
                    ))}
                  </ProductPageStyles.RadioWrapper>
                </ProductPageStyles.VariationsContainer>
              )}
            </ProductPageStyles.InfoWrapperCol>
            <ProductPageStyles.InfoWrapperCol>
              <AddToCartForm product={product} variation={selectedVariation} />
              <ProductPageStyles.Category>
                Categoria:{' '}
                <ProductPageStyles.CategorySpan>
                  {product.categories[0].name}
                </ProductPageStyles.CategorySpan>
              </ProductPageStyles.Category>
            </ProductPageStyles.InfoWrapperCol>
          </ProductPageStyles.InfoWrapper>
        </BasicGrid>
        <ProductPageStyles.LongDescription
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </ProductPageStyles.ContentWrapper>
    </BasicContainer>
  )
}

export default ProductPageContainer
