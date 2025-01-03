interface FooterProps {
	bgWhite?: boolean;
}

export function Footer({ bgWhite = false }: FooterProps) {
	return (
		<footer
			className={`${
				bgWhite ? "bg-zinc-50" : "bg-zinc-900"
			} text-center text-white py-4 sm:mt-0 -mt-[1px]`}
		>
			<p className={`${bgWhite ? "text-zinc-900" : "text-white"}`}>
				Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.
			</p>
		</footer>
	);
}
