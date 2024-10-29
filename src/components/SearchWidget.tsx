import React, { PropsWithChildren } from 'react'
import { DebouncedFunc } from 'lodash'
import { Product } from '../data/types/Product.ts'
import { CiSearch } from 'react-icons/ci'
import { SearchSuggestions } from './SearchSuggestions.tsx'


interface ISearchWidget extends PropsWithChildren {
	handleSearchDebounce: DebouncedFunc<(event: React.FormEvent<HTMLInputElement>) => void>
	data?: Product[]
	search: string
}

export function SearchWidget(props: ISearchWidget) {
	const { handleSearchDebounce, search, data } = props

	const formStyles        = { gridTemplateAreas: '"search button" "suggestions blank"' },
		  inputStyles       = { gridArea: 'search' },
		  buttonStyles      = { gridArea: 'button' },
		  suggestionsStyles = { gridArea: 'suggestions' }

	return (
		<form className="grid rounded relative show-suggestions"
			  style={formStyles}>
			<label className="sr-only" htmlFor="search">
				search term
			</label>

			<input className="bg-gray-200 p-2 w-full rounded-tl rounded-bl"
				   onInput={handleSearchDebounce}
				   style={inputStyles}
				   type="search"
				   name="search"
				   id="search"/>

			{
				(search !== '') && (data && data.length > 0)
				&& (<SearchSuggestions products={data}
									   style={suggestionsStyles}/>)
			}

			<button className="bg-blue-500 px-4 py-2 rounded-tr rounded-br"
					style={buttonStyles}
					type="submit">
				<span className="sr-only">search products</span>
				<CiSearch className="size-5"/>
			</button>
		</form>
	)
}

