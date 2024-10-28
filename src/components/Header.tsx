import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import { ProductService } from '../data/services/product.service.ts'
import React, { PropsWithChildren, useState } from 'react'
import { debounce, DebouncedFunc } from 'lodash'
import { CiBag1, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'


export { Header }

function Header() {
	const [search, setSearch] = useState<string>('')

	const { data } = useQuery<Product[], Error>(
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
				<figcaption className="p-2">
					<Link to="/">
						<span className="sr-only">logo</span>
						<CiBag1 className="size-5"/>
					</Link>
				</figcaption>
			</figure>

			<menu className="flex flex-grow justify-between gap-48">
				<li>
					<SearchWidget handleSearchDebounce={handleSearchDebounce}
								  search={search} data={data}/>
				</li>

				<li>
					<Link to="/cart"
						  className="block rounded-md bg-blue-500 p-2">
						<span className="sr-only">carrinho</span>
						<CiShoppingCart className="size-5"/>
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
		<form className="flex">
			<label className="mr-5" htmlFor="search">
				search term
			</label>

			<input className="rounded bg-gray-200 px-5 py-2.5"
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

			<button className="bg-blue-500 rounded-br rounded-tr px-5 py-2.5"
					type="submit">
				<span className="sr-only">search products</span>
				<CiSearch className="size-5"/>
			</button>
		</form>
	)
}