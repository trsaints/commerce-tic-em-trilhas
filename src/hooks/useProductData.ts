import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import { ProductService } from '../data/services/product.service.ts'


export { useProductData }

function useProductData(productOrder: 'asc' | 'dsc') {
	return useQuery<Product[], Error>(
		['products-query', productOrder],
		async () => await ProductService.getAll(productOrder)
	)
}