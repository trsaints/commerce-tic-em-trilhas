import React, { ComponentProps, useContext } from 'react'
import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'
import { Card } from './Card.tsx'
import { Product } from '../data/types/Product.ts'


interface IProductCardList extends ComponentProps<'ul'> {
	productData: Product[]
}

export function ProductCardList({ productData }: IProductCardList) {
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