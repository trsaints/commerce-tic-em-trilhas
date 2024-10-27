import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'
import { useContext } from 'react'
import { ProductCardList } from '../components/ProductCardList.tsx'


export { ShoppingCart }

function ShoppingCart() {
	const { listItems } = useContext(ShoppingCartContext)

	return (
		<article>
			<h1>Carrinho</h1>

			<ProductCardList productData={listItems.map(item => item.product)}/>
		</article>
	)
}