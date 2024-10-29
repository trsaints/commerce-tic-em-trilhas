import { ComponentProps } from 'react'
import { Product } from '../data/types/Product.ts'


interface ISearchSuggestions extends ComponentProps<'aside'> {
	products: Product[]
}

export function SearchSuggestions({ products }: ISearchSuggestions) {
	return (
		<aside className="bg-gray-300 absolute top-10 w-44">
			<ul className="overflow-y-scroll h-16 flex flex-col gap-[0.0625rem]">
				{products.map(product => {
					const nameToDisplay = product.name.length > 10
										  ? product.name.slice(0, 10) + '...'
										  : product.name

					return (
						<li key={product.id}>
							<button className="overflow-hidden bg-white text-left w-full"
									type="button">
								<img className="size-12  inline-block mr-2"
									 src="https://picsum.photos/200"
									 alt={`display banner for the "${product.name}" product`}/>

								{nameToDisplay}
							</button>
						</li>
					)
				})}
			</ul>
		</aside>
	)
}