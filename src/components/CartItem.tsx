import { CiShoppingTag } from 'react-icons/ci'
import { CartItemControls } from './CartItemControls.tsx'
import { Product } from '../data/types/Product.ts'


export { CartItem }

interface ICartItem {
	product: Product
}

function CartItem({ product }: ICartItem) {
	return (
		<p className="flex gap-2 justify-between items-center rounded-xl overflow-hidden bg-white p-4 shadow w-full">
			<img className="inline-block size-28 object-cover"
				 src="https://picsum.photos/200"
				 alt={`banner for the "product" product`}/>

			<aside>
				<h2 className="text-wrap capitalize">{product.name}</h2>

				<p className="flex gap-2 font-bold mb-4">${product.price}
					<CiShoppingTag className="size-5"/>
				</p>

				<CartItemControls {...product} />
			</aside>
		</p>
	)
}