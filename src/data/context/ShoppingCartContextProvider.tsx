import { PropsWithChildren, useState } from 'react'
import {
	IShoppingCartContext,
	ShoppingCartContext
} from './ShoppingCartContext.ts'
import { ListItem } from '../types/ListItem.ts'
import { Product } from '../types/Product.ts'


export { ShoppingCartContextProvider }

function ShoppingCartContextProvider({ children }: PropsWithChildren) {
	const [listItems, setListItems] = useState<ListItem[]>([])

	const shoppingCartContext: IShoppingCartContext = {
		listItems,
		addProduct    : (product: Product) => {
			const existingItemIndex = listItems.findIndex((item) => item.product.id
																	=== product.id)

			if (existingItemIndex === -1) {
				const newListItem: ListItem = {
					product,
					quantity: 1,
					amount  : product.price
				}

				setListItems([...listItems, newListItem])

				return
			}

			shoppingCartContext.updateQuantity(product.id, 1)
		},
		removeProduct : (id: string) => {
			const updatedListItems = listItems.filter((item) => item.product.id
																!== id)

			setListItems(updatedListItems)
		},
		updateQuantity: (id: string, quantity: number) => {
			let currentQuantity = -1

			const updatedListItems = listItems.map((item) => {
				if (item.product.id === id) {
					return {
						...item,
						quantity: item.quantity + quantity,
						amount  : item.product.price * item.quantity
					}
				}

				currentQuantity = item.quantity

				return item
			})

			currentQuantity > 0 ? setListItems(updatedListItems)
								: shoppingCartContext.removeProduct(id)
		}
	}

	return (
		<ShoppingCartContext.Provider value={shoppingCartContext}>
			{children}
		</ShoppingCartContext.Provider>
	)
}