import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header } from './components/Header.tsx'


const mainRouter = createBrowserRouter([
										   {
											   path   : '/',
											   element: <Header/>,
											   index  : true
										   }
									   ])

export function App() {
	return (
		<main
			className="flex justify-content-center items-center bg-gray-200 h-screen">
			<RouterProvider router={mainRouter}/>
		</main>
	)
}