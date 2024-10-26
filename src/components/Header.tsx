import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import { ProductService } from '../data/services/product.service.ts'
import React, { PropsWithChildren, useState } from 'react'
import { debounce, DebouncedFunc } from 'lodash'


export { Header }

function Header() {
	const [search, setSearch] = useState<string>('')

	const { data, isLoading, error } = useQuery<Product[], Error>(
		['query-products-search', search],
		async () => await ProductService.search(search),
		{ enabled: search !== '' }
	)

	const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault()

		if (! event.target) return

		const { value } = event.target as HTMLInputElement

		if (value === '') return

		setSearch(value)
	}

	const handleSearchDebounce = debounce(handleSearch, 200)

	return (
		<header
			className="flex fixed gap-48 top-0 right-0 w-full bg-white py-3 px-5">
			<figure>
				<img className="max-w-36" src="" alt=""/>
				<figcaption>logo</figcaption>
			</figure>

			<menu className="flex flex-grow justify-between gap-48">
				<li>
					<SearchWidget handleSearchDebounce={handleSearchDebounce}
								  search={search} data={data}/>
				</li>

				<li>
					<button>
						carrinho
					</button>
				</li>
			</menu>
		</header>
	)
}

interface ISearchWidget extends PropsWithChildren {
	handleSearchDebounce: DebouncedFunc<(event: React.FormEvent<HTMLInputElement>) => void>
	search: string
	data?: Product[]
}

function SearchWidget(props: ISearchWidget) {
	const { handleSearchDebounce, search, data } = props

	return (
		<div className="flex flex-col gap-5">
			<form>
				<label className="mr-5" htmlFor="search">
					search term
				</label>

				<input
					className="rounded bg-gray-200 px-5 py-2.5"
					onInput={handleSearchDebounce}
					type="search"
					name="search"
					list="suggestions"
					id="search"/>

				<datalist className="bg-gray-200" id="suggestions">
					{((search !== '') && data)
					 && data.map(product => (
									 <option>{product.name}</option>
								 )
						)}
				</datalist>

				<button
					className="bg-blue-500 rounded-br rounded-tr px-5 py-2.5"
					type="submit">
					search
				</button>
			</form>
		</div>
	)
}