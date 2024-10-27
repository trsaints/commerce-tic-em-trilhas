import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout.tsx'
import { Home } from './view/Home.tsx'
import { ShoppingCart } from './view/ShoppingCart.tsx'
import {
	ShoppingCartContextProvider
} from './data/context/ShoppingCartContextProvider.tsx'


const mainRouter = createBrowserRouter([
										   {
											   path    : '/',
											   element : <RootLayout/>,
											   children: [
												   {
													   path   : '/',
													   element: <Home/>,
													   index  : true
												   },
												   {
													   path   : '/cart',
													   element: <ShoppingCart/>
												   }
											   ]
										   }
									   ])

export function App() {
	return (
		<ShoppingCartContextProvider>
			<RouterProvider router={mainRouter}/>
		</ShoppingCartContextProvider>
	)
}