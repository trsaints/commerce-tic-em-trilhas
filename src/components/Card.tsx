import { ComponentProps } from 'react'
import { CiShoppingTag } from 'react-icons/ci'
import { Product } from '../data/types/Product.ts'
import { BuyButton } from './BuyButton.tsx'


export const Card = {
	Body, BuyButton
}

interface ICard extends ComponentProps<'article'> {
	product: Product
}

function Body({ product, children }: ICard) {
	const { name, price } = product

	return (
		<article className="rounded-xl overflow-hidden bg-white p-4 shadow w-60">
			<figure className="mb-2">
				<img src="https://picsum.photos/200"
					 alt={`banner for the ${name} product`}/>
				<figcaption className="text-wrap">{name}</figcaption>
			</figure>

			<p className="flex gap-2 font-bold mb-4">{price} <CiShoppingTag/>
			</p>

			{children}
		</article>
	)
}