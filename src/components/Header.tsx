export { Header }

function Header() {
	return (
		<header
			className="flex fixed gap-48 top-0 right-0 w-full bg-white py-3 px-5">
			<figure>
				<img className="max-w-36" src="" alt=""/>
				<figcaption>logo</figcaption>
			</figure>

			<menu className="flex flex-grow justify-between gap-48">
				<li>
					<form>
						<label className="mr-5" htmlFor="search">
							search term
						</label>

						<input
							className="rounded bg-gray-200 px-5 py-2.5"
							type="text"
							id="search"/>

						<button
							className="bg-blue-500 rounded-br rounded-tr px-5 py-2.5"
							type="submit">
							search
						</button>
					</form>
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