import { ProductService } from '../data/services/product.service.ts'
import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import React, { useState } from 'react'
import { ProductCardList } from '../components/ProductCardList.tsx'


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

