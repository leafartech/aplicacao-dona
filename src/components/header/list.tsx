export function List() {
	return (
		<ul className="flex flex-col gap-4 sm:ps-4 text-zinc-100">
			<li className="">
				<span className="text-primary">{"▸"}</span> <strong>Simulações realísticas</strong> (presenciais ou online)
				para você <strong>desenvolver sua segurança</strong> nos plantões
			</li>
			<li className="">
				<span className="text-primary">{"▸"}</span>  Conteúdos vivenciais voltados para a prática para que você seja{" "}
				<strong>reconhecida como referência pelos seus colegas</strong> de
				trabalho
			</li>
			<li className="">
				<span className="text-primary">{"▸"}</span>  Habilidades socioemocionais para que você{" "}
				<strong>
					lidere a sua equipe sem parecer autoritária ou {"“"}boazinha
					{"”"}
				</strong>{" "}
				demais
			</li>
		</ul>
	);
}
