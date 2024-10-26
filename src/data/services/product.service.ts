import { Api } from '../../server/api.ts'
import { Product } from '../types/Product.ts'


export { ProductService }

const ProductService = {
	async getAll() {
		const response = await Api.get<Product[]>('products')

		return response.data
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