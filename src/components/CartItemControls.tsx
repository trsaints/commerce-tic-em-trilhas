import { FaMinus, FaPlus } from 'react-icons/fa'
import { CiTrash } from 'react-icons/ci'


export { CartItemControls }

interface ICartItemControls {
	name: string
	id: string
	quantity: number
}

function CartItemControls({ name, id, quantity }: ICartItemControls) {
	return (
		<menu className="flex justify-between gap-4">
			<li>
				<p className="flex items-center">
					<button className="p-3 bg-gray-800 rounded"
							data-decrease-id={id}
							id={`decrease-${id}`}>
						<span className="sr-only">remover 1 "{name}"</span>
						<FaMinus className="size-4 text-white"/>
					</button>

					<output className="px-4 py-2"
							htmlFor={`$increase-${id} decrease-${id}`}>
						<span className="sr-only">quantidade: </span>
						{quantity}
					</output>

					<button className="p-3 bg-blue-500 rounded"
							data-increase-id={id}
							id={`increase-${id}`}>
						<span className="sr-only">acrescentar 1 "{name}"</span>
						<FaPlus className="size-4"/>
					</button>
				</p>
			</li>

			<li>
				<button className="p-2 bg-red-600 rounded"
						data-remove-id={-1}
						id={`remove-${-1}`}>
					<span className="sr-only">remover "product" do carrinho</span>
					<CiTrash className="size-6 text-white"/>
				</button>
			</li>
		</menu>
	)
}