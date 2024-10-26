import { Api } from '../../server/api.ts'
import { Product } from '../types/Product.ts'


export { ProductService }

const ProductService = {
	async getAll(order: 'asc' | 'dsc') {
		const response = await Api.get<Product[]>(`products?_sort=price&_order=${order}`)

		return (order === 'dsc') ? response.data.reverse()
								 : response.data
	},

	async search(params: string) {
		const response = await Api.get<Product[]>(`products?search=${params}`)

		return response.data.filter(product => {
			const concatenatedValues = Object.values(product).join('').trim()

			if (! concatenatedValues.includes(params)) return

			return product
		})
	}
}