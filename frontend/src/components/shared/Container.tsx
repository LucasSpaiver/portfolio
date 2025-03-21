export interface ConteinerProps {
	children: React.ReactNode
	className: string
}

export default function Container(props: ConteinerProps) {
	return <div className={`max-w-7x1 mx-auto px-4 ${props.className ?? ""}`}>{props.children}</div>
}
