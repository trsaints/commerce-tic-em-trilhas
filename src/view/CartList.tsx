import { ListItem } from '../data/types/ListItem.ts'
import { CartItem } from '../components/CartItem.tsx'


interface ICartList {
	listItems: ListItem[]
}

export function CartList({ listItems }: ICartList) {
	const products  = listItems.map(listItem => listItem.product)
	const cartItems = products.map(product => (
		<li>
			<CartItem product={product}/>
		</li>
	))

	return (
		<ul className="flex flex-col gap-4 mb-24">{cartItems}</ul>
	)
}