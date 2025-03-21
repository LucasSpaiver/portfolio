import { Projeto } from "@core"
import ItemProjeto from "./itemProjeto"

export interface ProjetosProps {
	lista: Projeto[]
	titulo: string
}

export default function Projetos(props: ProjetosProps) {
	return (
		<div>
			<h3 className="text-2xl font-bold text-white/70">{props.titulo}</h3>
			<div className="flex gap-4 flex-wrap">
				{props.lista.map((projeto) => (
					<ItemProjeto key={projeto.id} projeto={projeto} />
				))}
			</div>
		</div>
	)
}
