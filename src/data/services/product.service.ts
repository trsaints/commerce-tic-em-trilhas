import { Api } from '../../server/api.ts'
import { Product } from '../types/Product.ts'


export { ProductService }

const ProductService = {
	async getAll() {
		const response = await Api.get<Product[]>('products')

		return response.data
	}
}