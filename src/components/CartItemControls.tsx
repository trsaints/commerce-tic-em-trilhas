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
				<p className="flex gap-2">
					<button data-increase-id={id} id={`increase-${id}`}>
						<span className="sr-only">adicionar</span>
						<CiCirclePlus/>
					</button>

					<output htmlFor={`$increase-${id} decrease-${id}`}>
						<span className="sr-only">quantidade: </span>
						{quantity}
					</output>

					<button data-decrease-id={id} id={`decrease-${id}`}>
						<span className="sr-only">remover "{name}"</span>
						<CiCircleMinus/>
					</button>
				</p>
			</li>

			<li>
				<button>
					<span className="sr-only">remover</span>
					<CiTrash/>
				</button>
			</li>
		</menu>
	)
}