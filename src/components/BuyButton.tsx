import { ComponentProps } from 'react'
import { CiShoppingCart } from 'react-icons/ci'


interface IBuyButton extends ComponentProps<'button'> {
	id: string
}

export function BuyButton({ id }: IBuyButton) {
	return (
		<button
			className="flex justify-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-700"
			data-product-id={id}>
			add to cart <CiShoppingCart/>
		</button>
	)
}