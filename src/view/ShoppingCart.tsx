import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'
import { useContext } from 'react'
import { ProductCardList } from '../components/ProductCardList.tsx'
import { useProductData } from '../hooks/useProductData.ts'
import { Card } from '../components/Card.tsx'
import { CartItemControls } from '../components/CartItemControls.tsx'
import { ListItem } from '../data/types/ListItem.ts'


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

interface ICartList {
	listItems: ListItem[]
}

function CartList({ listItems }: ICartList) {
	const products  = listItems.map(listItem => listItem.product)
	const cartItems = products.map(product => (
		<li>
			<Card.Body product={product}>
				<CartItemControls {...product} />
			</Card.Body>
		</li>
	))

	return (
		<ul className="flex flex-col gap-4 mb-24">{cartItems}</ul>
	)
}