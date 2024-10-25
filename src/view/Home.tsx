import { ComponentProps } from 'react'
import { Card } from '../components/Card.tsx'


export { Home }

interface IHome extends ComponentProps<'article'> {
}

function Home(props: IHome) {
	return (
		<article className='px-10'>
			<h1 className='mb-24 text-3xl font-bold'>TIC Market</h1>

			<Card banner="https://picsum.photos/200" name="Tainha"
				  value={29.99}/>
		</article>
	)
}