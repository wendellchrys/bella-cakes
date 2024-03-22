import { NextPage, GetStaticProps } from 'next'
import { Product, Variations } from '../../types' // Certifique-se de que o tipo Variation está definido
import { fetcher } from '../../utils/functions'
import ProductPageContainer from '../../containers/Product'

interface ProductPageProps {
  product: Product
  variations: Variations[]
}

const ProductPage: NextPage<ProductPageProps> = ({ product, variations }) => {
  return <ProductPageContainer product={product} variations={variations} />
}

export default ProductPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Primeira requisição para obter o produto
  const productsRes = await fetcher(`/wp-json/wc/v3/products?slug=${params?.slug}`)
  const products = await productsRes.json()

  const product = products[0] // Assumindo que o produto desejado está na primeira posição

  // Verifica se encontrou um produto
  if (!product) {
    return {
      notFound: true, // Retorna um 404 se nenhum produto for encontrado
    }
  }

  // Segunda requisição para obter as variações do produto, baseada no ID do produto encontrado
  const variationsRes = await fetcher(`/wp-json/wc/v3/products/${product.id}/variations`)
  const variations = await variationsRes.json()

  return {
    props: {
      product,
      variations, // Passando as variações como uma segunda prop
    },
  }
}

export const getStaticPaths = async () => {
  try {
    const productsRes = await fetcher(`/wp-json/wc/v3/products?per_page=30`)
    const products = await productsRes.json()

    // Verifica se products é um array antes de filtrar
    if (!Array.isArray(products)) {
      throw new Error('A resposta da API não é um array')
    }

    const publishedProducts = products.filter(
      (product: { [key: string]: any }) => product.status === 'publish',
    )

    const paths = publishedProducts.map((product: Product) => ({
      params: { slug: String(product.slug) },
    }))

    return { paths, fallback: false }
  } catch (error) {
    console.error('Erro ao obter os produtos:', error)
    return { paths: [], fallback: false } // Retorna um array vazio em caso de erro
  }
}
