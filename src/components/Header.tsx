import React, { useState } from 'react'
import { debounce } from 'lodash'
import { CiBag1, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useSearchData } from '../hooks/useSearchData.ts'
import { SearchWidget } from './SearchWidget.tsx'

export { Header }

function Header() {
	const [search, setSearch] = useState<string>('')

	const { data } = useSearchData(search)

	const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault()

		if (! event.target) return

		const { value } = event.target as HTMLInputElement

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
								  search={search}
								  data={data}/>
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
