import { PropsWithChildren, useState } from 'react'
import {
	IShoppingCartContext,
	ShoppingCartContext
} from './ShoppingCartContext.ts'
import { ListItem } from '../types/ListItem.ts'
import { Product } from '../types/Product.ts'


function ShoppingCartContextProvider({ children }: PropsWithChildren) {
	const [listItems, setListItems] = useState<ListItem[]>([])

	const shoppingCartContext: IShoppingCartContext = {
		listItems,
		addProduct      : ({ id, name, price }: Product) => {
			const existingItemIndex = listItems.findIndex((item) => item.id
																	=== id)

			if (existingItemIndex === -1) {
				const newListItem: ListItem = {
					id,
					name,
					price,
					quantity: 1,
					amount  : price
				}

				setListItems([...listItems, newListItem])

				return
			}

			shoppingCartContext.increaseQuantity(id)
		},
		removeProduct   : (id: string) => {
			const updatedListItems = listItems.filter((item) => item.id !== id)

			setListItems(updatedListItems)
		},
		increaseQuantity: (id: string) => {
			const updatedListItems = listItems.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity + 1,
						amount  : item.price * item.quantity
					}
				}

				return item
			})

			setListItems(updatedListItems)
		},
		decreaseQuantity: (id: string) => {
			let currentQuantity = -1

			const updatedListItems = listItems.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity - 1,
						amount  : item.price * item.quantity
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