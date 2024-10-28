import { Product } from '../data/types/Product.ts'
import React, { PropsWithChildren, useState } from 'react'
import { debounce, DebouncedFunc } from 'lodash'
import { CiBag1, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useSearchData } from '../hooks/useSearchData.ts'


export { Header }

function Header() {
	const [search, setSearch] = useState<string>('')

	const { data } = useSearchData(search)

	const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault()

		if (! event.target) return

		const { value } = event.target as HTMLInputElement

		if (value === '') return

		setSearch(value)
	}

	const handleSearchDebounce = debounce(handleSearch, 200)

	return (
		<header className="flex fixed gap-4 top-0 right-0 w-full bg-white py-3 px-5 shadow">
			<Link to="/" className="inline-block p-2">
				<span className="sr-only">logo</span>
				<CiBag1 className="size-5"/>
			</Link>

			<menu className="flex flex-grow justify-between gap-4 items-center">
				<li>
					<SearchWidget handleSearchDebounce={handleSearchDebounce}
								  search={search} data={data}/>
				</li>

				<li>
					<Link to="/cart"
						  className="block rounded-md bg-blue-500 p-2">
						<span className="sr-only">carrinho</span>
						<CiShoppingCart className="size-6"/>
					</Link>
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
		<form className="flex rounded overflow-hidden">
			<label className="sr-only" htmlFor="search">
				search term
			</label>

			<input className="bg-gray-200 p-2 max-w-40"
				   onInput={handleSearchDebounce}
				   type="search"
				   name="search"
				   list="suggestions"
				   id="search"/>

			<datalist className="bg-gray-200" id="suggestions">
				{((search !== '') && data)
				 && data.map(product => (<option>{product.name}</option>))
				}
			</datalist>

			<button className="bg-blue-500 px-4 py-2"
					type="submit">
				<span className="sr-only">search products</span>
				<CiSearch className="size-5"/>
			</button>
		</form>
	)
}