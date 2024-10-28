import { CiCircleMinus, CiCirclePlus, CiTrash } from 'react-icons/ci'


export { CartItemControls }

interface ICartItemControls {
	name: string
	id: string
	quantity: number
}

function CartItemControls({ name, id, quantity }: ICartItemControls) {
	return (
		<menu className="flex flex-col gap-4">
			<li>
				<p className="flex items-center">
					<button className="p-2 bg-gray-800 rounded"
							data-decrease-id={id}
							id={`decrease-${id}`}>
						<span className="sr-only">remover 1 "{name}"</span>
						<CiCircleMinus className="size-6 text-white"/>
					</button>

					<output className="px-4 py-2"
							htmlFor={`$increase-${id} decrease-${id}`}>
						<span className="sr-only">quantidade: </span>
						{quantity}
					</output>

					<button className="p-2 bg-blue-500 rounded"
							data-increase-id={id}
							id={`increase-${id}`}>
						<span className="sr-only">acrescentar 1 "{name}"</span>
						<CiCirclePlus className="size-6"/>
					</button>
				</p>
			</li>

			<li>
				<button className="p-2 bg-red-600 rounded"
						data-increase-id={id}
						id={`increase-${id}`}>
					<span className="sr-only">remover "{name}" do carrinho</span>
					<CiTrash className="size-6 text-white"/>
				</button>
			</li>
		</menu>
	)
}