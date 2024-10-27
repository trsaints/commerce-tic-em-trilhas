import { createContext } from 'react'
import { ListItem } from '../types/ListItem.ts'
import { Product } from '../types/Product.ts'


export { ShoppingCartContext }

export interface IShoppingCartContext {
	listItems: ListItem[]
	addProduct: (product: Product) => void
	removeProduct: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
}

const ShoppingCartContext = createContext<IShoppingCartContext>({
																	listItems     : [],
																	addProduct    : () => {},
																	removeProduct : () => {},
																	updateQuantity: () => {}
																})