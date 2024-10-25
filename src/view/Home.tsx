import { Card } from '../components/Card.tsx'
import { useEffect } from 'react'
import { ProductService } from '../data/services/product.service.ts'


export { Home }

function Home() {
	useEffect(() => {
		ProductService.getAll().then(products => {
			console.log(products)
		})
	}, [])

	return (
		<article className="px-10">
			<h1 className="mb-24 text-3xl font-bold">TIC Market</h1>

			<Card banner="https://picsum.photos/200" name="Tainha"
				  value={29.99}/>
		</article>
	)
}