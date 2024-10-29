import { ComponentProps } from 'react'
import { Product } from '../data/types/Product.ts'


interface ISearchSuggestions extends ComponentProps<'aside'> {
	products: Product[]
}

export function SearchSuggestions({ products }: ISearchSuggestions) {
	return (
		<aside className="bg-gray-100 rounded-b">
			<ul className="overflow-y-scroll h-14 flex flex-col gap-2 p-2">
				{products.map(product => {
					const nameToDisplay = product.name.length > 10
										  ? product.name.slice(0, 10) + '...'
										  : product.name

					return (
						<li key={product.id}>
							<button className="rounded overflow-hidden bg-white shadow text-left"
									type="button">
								<img className="w-1/4  inline-block mr-2"
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