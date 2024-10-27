import { Card } from '../components/Card.tsx'
import { ProductService } from '../data/services/product.service.ts'
import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import React, { ComponentProps, useContext, useState } from 'react'
import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'


export { Home }

function Home() {
	const [productOrder, setProductOrder] = useState<'asc' | 'dsc'>('asc')

	const { data: productData, error, isLoading } = useQuery<Product[], Error>(
		['products-query', productOrder],
		async () => await ProductService.getAll(productOrder)
	)

	const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (! event.target.value) return

		setProductOrder(event.target.value as 'asc' | 'dsc')
	}

	return (
		<article className="px-10 mt-52">
			<h1 className="mb-24 text-3xl font-bold">TIC Market</h1>

			<select className="capitalize mb-10 p-2"
					onChange={handleOrderChange} name="order" id="order">
				<option value="asc">menor preço</option>
				<option value="dsc">maior preço</option>
			</select>

			<ProductCardList productData={productData ?? []}/>
		</article>
	)
}

interface IProductCardList extends ComponentProps<'ul'> {
	productData: Product[]
}

function ProductCardList({ productData }: IProductCardList) {
	const { addProduct } = useContext(ShoppingCartContext)

	const handleAddProduct = (event: React.MouseEvent<HTMLUListElement>) => {
		const target       = event.target as HTMLUListElement
		const selectedCard = target.closest('[data-product-id]') as HTMLElement

		if (! selectedCard) return

		const productId       = selectedCard.dataset.productId
		const selectedProduct = productData.find(product => product.id
															=== productId)

		if (! selectedProduct) return

		addProduct(selectedProduct)
	}


	const productCardList = productData.map(product => (
		<li key={`product-${product.id}`}>
			<Card banner="https://picsum.photos/200" name={product.name}
				  price={product.price}/>
		</li>
	))

	return (
		<ul className="flex gap-5 flex-wrap"
			onClick={handleAddProduct}>
			{productCardList}
		</ul>
	)
}