import { ComponentProps } from 'react'
import { CiShoppingCart, CiShoppingTag } from 'react-icons/ci'


export { Card }

interface ICard extends ComponentProps<'article'> {
	name: string
	price: number
	banner: string
}

function Card(props: ICard) {
	const { name, price, banner } = props

	return (
		<article className="rounded-xl overflow-hidden bg-white p-4">
			<figure className="mb-2">
				<img src={banner} alt={`banner for the ${name} product`}/>
				<figcaption>{name}</figcaption>
			</figure>

			<p className="flex gap-2 font-bold mb-4">{price} <CiShoppingTag /> </p>

			<button
				className="flex justify-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-700">
				add to cart <CiShoppingCart/>
			</button>
		</article>
	)
}