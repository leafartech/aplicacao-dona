"use client"

import { Footer } from "@/components/congratulations/footer";
import { Steps2 } from "@/components/congratulations/steps";
import Section from "@/components/section";
import Image from "next/image";
import { useEffect, useRef } from "react";

// export const metadata: Metadata = {
// 	title: "Parabéns, Dona!",
// 	description: "Página de agracedimento para a Dona do Plantão",
// 	category: "Parabéns",
// 	keywords: ["Aplicação", "Dona do Plantão", "Parabéns"],
// };


export default function Page() {

	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
	  const observer = new MutationObserver(() => {
		const iframe = iframeRef.current;
		if (iframe) {
		  try {
			const iframeDoc = iframe.contentWindow?.document;
			if (iframeDoc) {
			  const footer = iframeDoc.getElementById("powered_by_footer");
			  if (footer) {
				footer.style.display = "none"; // Esconde o elemento
			  }
			}
		  } catch (err) {
			console.warn("Não foi possível acessar o iframe diretamente.");
		  }
		}
	  });
  
	  observer.observe(document, { childList: true, subtree: true });
  
	  return () => observer.disconnect();
	}, []);
  

	return (
		<>
			<main className="bg-zinc-100 min-h-screen w-full text-black">
				<div className="bg-zinc-800 fixed top-0 left-0 w-full z-[9999] flex justify-center items-center py-2">
					<div className="relative w-[240px] h-[32px]">
						<Image
							src="/images/logo.webp"
							alt="Logo Dona"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>

				<Section className="sm:py-24 pt-24 pb-16 px-4">
					<div className="flex flex-col items-center gap-6">
						<div className="max-w-xl flex flex-col text-center justify-center items-center gap-2">
							<h2 className="text-primary-dark text-3xl sm:text-4xl font-bold">
								Pronto, Aplicação quase feita!
							</h2>
							<p className="text-zinc-600">Agora, você vai marcar um momento no calendário abaixo para conversar diretamente com o nosso time</p>
						</div>
						<Steps2 />
					</div>
				</Section>

				<Section className="py-12 sm:py-24 px-0" classNameS="bg-zinc-800 h-full sm:h-screen">
					<div className="w-full flex justify-center">
						<iframe
							src="https://tidycal.com/1vzzev3/chamada-de-apresentacao"
							height="656px"
							className="w-full rounded-lg shadow-lg border border-zinc-300 scroll-none"
							allowFullScreen
						></iframe>
					</div>
				</Section>
			</main>

			<Footer bgWhite={true} />
		</>
	);
}