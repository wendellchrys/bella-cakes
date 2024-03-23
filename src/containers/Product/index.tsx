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

// Digite sortOrder para definir explicitamente as chaves permitidas
type OptionSortOrder = {
  P: number;
  M: number;
  G: number;
};

const sortOrder: OptionSortOrder = { P: 1, M: 2, G: 3 };

const getSortValue = (option: string, sortOrder: OptionSortOrder): number => {
  // Verifique se a chave está presente no objeto sortOrder, se não, retorne 4
  return sortOrder[option as keyof OptionSortOrder] || 4;
};

const ProductPageContainer: React.FC<ProductPageContentProps> = ({ product, variations }) => {
  // Estado para a variação selecionada
  const [selectedVariation, setSelectedVariation] = useState<Variations | undefined>(undefined)

  console.log('variations:', variations[0])

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
              <ProductPageStyles.LongDescription
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              {variations.length > 0 && (
                <ProductPageStyles.VariationsContainer>
                  <label>Escolha uma Variação:</label>
                  <ProductPageStyles.RadioWrapper>
                    {variations
                      .slice() // Faz uma cópia do array para não modificar o original
                      .sort((a, b) => {
                        // Obtenha o valor de 'option' para o atributo 'Tamanho' de cada variação
                        const optionA = a.attributes.find((attr: { name: string }) => attr.name === 'Tamanho')?.option || '';
                        const optionB = b.attributes.find((attr: { name: string }) => attr.name === 'Tamanho')?.option || '';

                        console.log('optionA:', optionA); // Deve mostrar 'P', 'M', 'G' ou ''
                        console.log('optionB:', optionB); // Deve mostrar 'P', 'M', 'G' ou ''

                        // Agora usamos a função auxiliar para obter o valor de classificação.
                        return getSortValue(optionA, sortOrder) - getSortValue(optionB, sortOrder);
                      })
                      .map((variation) => (
                        <ProductPageStyles.RadioLabel key={variation.id}>
                          <ProductPageStyles.RadioButton
                            type="radio"
                            name="product-variations"
                            value={variation.id}
                            onChange={handleVariationChange}
                          />
                          {variation.attributes
                            .map((attr: { name: string; option: string }) => `${attr.name}: ${attr.option} `)
                            .join(', ')}
                          <ProductPageStyles.Price>{formatPrice(Number(variation.price))}</ProductPageStyles.Price>
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

      </ProductPageStyles.ContentWrapper>
    </BasicContainer>
  )
}

export default ProductPageContainer
