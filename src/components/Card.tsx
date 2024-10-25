import { ComponentProps } from 'react'


export { Card }

interface ICard extends ComponentProps<'article'> {
	name: string
	value: number
	banner: string
}

function Card(props: ICard) {
	const { name, value, banner } = props

	return (
		<article className='rounded-xl overflow-hidden bg-white p-4'>
			<figure className='mb-2'>
				<img src={banner} alt={`banner for the ${name} product`}/>
				<figcaption>{name}</figcaption>
			</figure>

			<p className='font-bold mb-4'>{value}</p>

			<button className="px-2 py-1 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-700">add to cart</button>
		</article>
	)
}