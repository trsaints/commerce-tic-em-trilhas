import { ListItem } from '../data/types/ListItem.ts'
import { Card } from '../components/Card.tsx'
import { CartItemControls } from '../components/CartItemControls.tsx'


interface ICartList {
	listItems: ListItem[]
}

export function CartList({ listItems }: ICartList) {
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