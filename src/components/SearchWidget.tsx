import React, { ComponentProps, PropsWithChildren } from 'react'
import { DebouncedFunc } from 'lodash'
import { Product } from '../data/types/Product.ts'
import { CiSearch } from 'react-icons/ci'


interface ISearchWidget extends PropsWithChildren {
	handleSearchDebounce: DebouncedFunc<(event: React.FormEvent<HTMLInputElement>) => void>
	data?: Product[]
}

export function SearchWidget(props: ISearchWidget) {
	const { handleSearchDebounce, data } = props

	const formStyles = {
		gridTemplateAreas: '"search button" "suggestions blank"'
	}

	const inputStyles = {
		gridArea: 'search'
	}

	const buttonStyles = {
		gridArea: 'button'
	}

	const suggestionsStyles = {
		gridArea: 'suggestions'
	}

	return (
		<form className="grid rounded overflow-hidden" style={formStyles}>
			<label className="sr-only" htmlFor="search">
				search term
			</label>

			<input className="bg-gray-200 p-2 max-w-40"
				   onInput={handleSearchDebounce}
				   style={inputStyles}
				   type="search"
				   name="search"
				   id="search"/>

			{
				data && data.length > 0 && (
						 <SearchSuggestions products={data} style={suggestionsStyles}/>)
			}

			<button className="bg-blue-500 px-4 py-2"
					style={buttonStyles}
					type="submit">
				<span className="sr-only">search products</span>
				<CiSearch className="size-5"/>
			</button>
		</form>
	)
}

interface ISearchSuggestions extends ComponentProps<'aside'> {
	products: Product[]
}

function SearchSuggestions({ products }: ISearchSuggestions) {
	return (
		<aside className="bg-gray-200">
			<ul className="overflow-y-scroll h-10">
				{products.map(product => (
					<li key={product.id}>
						{product.name}
					</li>
				))}
			</ul>
		</aside>
	)
}