import { Header } from '../components/Header.tsx'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'


export { RootLayout }

function RootLayout() {
	return (
		<>
			<Header/>

			<main
				className="flex justify-content-center items-center bg-gray-200 pt-40">
				<Suspense fallback={'carregando...'}>
					<Outlet/>
				</Suspense>
			</main>
		</>
	)
}