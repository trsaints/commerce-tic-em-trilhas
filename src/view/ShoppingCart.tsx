import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'
import { useContext } from 'react'
import { ProductCardList } from '../components/ProductCardList.tsx'
import { useProductData } from '../hooks/useProductData.ts'
import { CartList } from './CartList.tsx'


export { ShoppingCart }

function ShoppingCart() {
	const { listItems }         = useContext(ShoppingCartContext)
	const { data: productData } = useProductData('asc')

	return (
		<article className="overflow-hidden">
			<h1 className="h1 capitalize">meu carrinho</h1>

			<CartList listItems={listItems}/>

			<aside>
				<h2 className="mb-12 font-bold">Você pode gostar de...</h2>

				<ProductCardList productData={productData ?? []}/>
			</aside>
		</article>
	)
}