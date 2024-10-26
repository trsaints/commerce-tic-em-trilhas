import { Card } from '../components/Card.tsx'
import { ProductService } from '../data/services/product.service.ts'
import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import { ComponentProps } from 'react'


export { Home }

function Home() {
	const { data: productData, error, isLoading } = useQuery<Product[], Error>(
		'products-query',
		async () => {
			return await ProductService.getAll()
		}
	)


	return (
		<article className="px-10 mt-52">
			<h1 className="mb-24 text-3xl font-bold">TIC Market</h1>

			<ProductCardList productData={productData ?? []}/>
		</article>
	)
}

interface IProductCardList extends ComponentProps<'ul'> {
	productData: Product[]
}

function ProductCardList({ productData }: IProductCardList) {
	const productCardList = productData.map(product => (
		<li key={`product-${product.id}`}>
			<Card banner="https://picsum.photos/200" name={product.name}
				  price={product.price}/>
		</li>
	))

	return <ul className="flex gap-5 flex-wrap">{productCardList}</ul>
}