import { ShoppingCartContext } from '../data/context/ShoppingCartContext.ts'
import { useContext } from 'react'
import { ProductCardList } from '../components/ProductCardList.tsx'
import { useProductData } from '../hooks/useProductData.ts'
import { CartList } from './CartList.tsx'


export { ShoppingCart }

function ShoppingCart() {
	const { listItems }         = useContext(ShoppingCartContext)
	const { data: productData } = useProductData('asc')

	return (
		<article className="overflow-hidden">
			<h1 className="h1 capitalize">meu carrinho</h1>

			{
				listItems.length > 0 ? <CartList listItems={listItems}/>
									 : (
					<p className="text-center mb-24 capitalize">
						<img src="/assets/empty-cart.svg"
							 alt="Carrinho vazio"
							 className="block mx-auto mb-12"/>

						seu carrinho está vazio. que tal adicionar um produto?
					</p>
				)
			}

			<aside>
				<h2 className="mb-12 font-bold">Você pode gostar de...</h2>

				<ProductCardList productData={productData ?? []}/>
			</aside>
		</article>
	)
}