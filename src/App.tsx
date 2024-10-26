import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './view/Home.tsx'
import { Header } from './components/Header.tsx'


const mainRouter = createBrowserRouter([
										   {
											   path   : '/',
											   element: (
												   <>
													   <Header/>
													   <Home/>
												   </>
											   ),
											   index  : true
										   }
									   ])

export function App() {
	return (
		<main
			className="flex justify-content-center items-center bg-gray-200">
			<RouterProvider router={mainRouter}/>
		</main>
	)
}