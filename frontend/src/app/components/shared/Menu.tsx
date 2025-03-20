"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()
	return (
		<nav className="flex items-center gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Inicio
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={caminho === "/projeto"} novaAba={false}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=18997703265&text&type=phone_number&app_absent=0"
				selecionado={false}
				novaAba={true}
			>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(Props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={Props.href} target={Props.novaAba ? "_blank" : "self"}>
			<span
				className={`
                    flex items-center gap-2 text-sm border-red-600 hover:text-white
                    ${Props.selecionado ? "border-b-4 text-white" : "text-zinc-500"}
                    `}
			>
				{Props.children}
			</span>
		</Link>
	)
}
