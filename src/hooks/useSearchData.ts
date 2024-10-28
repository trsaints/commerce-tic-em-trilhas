import { useQuery } from 'react-query'
import { Product } from '../data/types/Product.ts'
import { ProductService } from '../data/services/product.service.ts'


export { useSearchData }

function useSearchData(search: string) {
	return useQuery<Product[], Error>(
		['query-products-search', search],
		async () => await ProductService.search(search),
		{ enabled: search !== '' }
	)
}