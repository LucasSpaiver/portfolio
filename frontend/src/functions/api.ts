const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
	console.log(normalizarUrl(`${baseURL}/${url}`))
	const response = await fetch(normalizarUrl(`${baseURL}/${url}`))
	return response.json()
}

function normalizarUrl(url?: string): string {
	if (!url) {
		throw new Error("URL inválida: valor indefinido ou nulo.")
	}

	const partes = url.split("://")

	if (partes.length < 2) {
		throw new Error(`URL malformada: "${url}" não contém "://".`)
	}

	const protocolo = partes[0]
	const restante = partes[1] || ""

	return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}
