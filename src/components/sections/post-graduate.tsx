"use client";

import Section from "@/components/section";
import Image from "next/image";

export function PostGraduate() {
	return (
		<Section classNameS="pb-6 sm:py-24 bg-zinc-50 px-4 text-black">
			<div className="grid gap-8 sm:grid-cols-2 items-center">
				<div className="relative sm:w-[512px] sm:h-[336px] mx-auto">
					<Image
						src="/images/group.png"
						alt="Ted Talks - Imagem representando aprendizado prático"
						layout="fill"
						objectFit="contain"
						className="rounded-2xl shadow-lg"
					/>
				</div>

				<div className="flex flex-col gap-6 sm:max-w-xl">
					<h2 className="text-3xl font-semibold text-zinc-800 leading-tight">
						Por que nossa <span className="text-primary">Pós é única?</span>
					</h2>
					<div className="flex flex-col gap-4 text-lg leading-relaxed text-zinc-700">
						<p>Diferente de outros programas de Pós que entregam muita teoria e pouca prática…</p>
						<p>Aqui <strong>você aprende</strong>, de fato, <strong>com quem dá plantões</strong>.</p>
						<p>Todo o nosso <strong>conteúdo é validado por mais de 200 mil horas</strong> de plantões dos nossos professores e facilitadores.</p>
						<p>Toda essa <strong>experiência prática</strong> nos permite ensinar a você o que realmente dá <strong>segurança e resolutividade</strong> nos plantões.</p>
						<p>Além disso, nosso conteúdo também é comprovado por mais de mil enfermeiros formados por nosso sistema de educação, e que estão atuando com <strong>postura convicta, raciocínio clínico avançado</strong> bem desenvolvido e <strong>segurança na beira leito</strong> em todo o Brasil.</p>
					</div>
				</div>
			</div>
		</Section>
	);
}
