"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import { CircleShadow } from "@/components/circle-shadow";
import { Disciplines } from "@/components/disciplines";
import { Header } from "@/components/header";
import { Footer } from "@/components/home/footer";
import { Modal } from "@/components/modal";
import { ProgrammaticaContent } from "@/components/programmatic-content";
import Section from "@/components/section";
import { PostGraduate } from "@/components/sections/post-graduate";
import { TestimonialGallery } from "@/components/sections/testimonial-gallery";
import VideoCard from "@/components/video-card";
import { Videos } from "@/components/videos";
import { Gift } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PageProps {
	searchParams: {
		utm_content?: string;
		utm_campaign?: string;
		utm_term?: string;
		utm_source?: string;
		utm_medium?: string;
	};
}

export default function Page({ searchParams }: PageProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Header.Root>
				<Header.Wrapper>
					<div className="max-w-2xl flex flex-col gap-8 text-white">
						<div className="flex flex-col gap-4">
							<Badge
								text="Lote de Ano Novo: Turma de 2025 com valor de 2024!"
								icon={Gift}
								className="hidden sm:inline-flex sm:items-center max-w-96"
							/>

							<Header.Title>
								Pós-Graduação em{" "}
								<span className="text-primary">Enfermagem em Urgência</span> e{" "}
								<span className="text-primary">Emergência Hospitalar</span> com
								Ênfase em Inovação
							</Header.Title>
						</div>

						<Header.List />

						<Button
							open={isOpen}
							setOpen={setIsOpen}
							label="Quero preencher a aplicação"
						/>
					</div>

					<Header.Image />
				</Header.Wrapper>
				<CircleShadow />
			</Header.Root>

			<main>
				<PostGraduate />

				<Section classNameS="pt-2 pb-12 sm:py-12 bg-zinc-50 px-4">
					<div className="flex flex-col items-center gap-8 sm:gap-12">
						<Videos />

						<Button
							open={isOpen}
							setOpen={setIsOpen}
							label="Quero preencher a aplicação"
						/>
					</div>
				</Section>

				<Section classNameS="relative py-14 sm:py-24 bg-zinc-900 px-4">
					<div className="flex flex-col items-center gap-8 sm:gap-12 text-white">
						<h2 className="text-3xl font-semibold">
							Confira nossa{" "}
							<span className="text-primary">Plataforma por dentro</span>
						</h2>

						<div className="w-full flex flex-wrap gap-12">
							<VideoCard
								colors={true}
								src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=bd28656d-7d65-452b-98cf-189fc1a7f3c2&iosFakeFullscreen=true"
								className="w-full max-w-2xl"
								classNameVideo="h-[316px] rounded"
							/>
						</div>

						<Button
							open={isOpen}
							setOpen={setIsOpen}
							label="Quero preencher a aplicação"
						/>
					</div>
					<div className="absolute left-0 bottom-0 w-40 h-40 bg-primary blur-[124px]" />
				</Section>

				<Section classNameS="py-12 sm:py-24 bg-zinc-50 px-4 text-black">
					<div className="flex flex-col items-center sm:items-center gap-6 sm:gap-12">
						<ProgrammaticaContent />

						<Disciplines />

						<div className="w-full flex flex-col items-center gap-12">
							<div className="relative h-[150px] w-[150px]">
								<Image
									src="/images/selo.webp"
									alt="Selo de Graduação reconhecida pelo MEC"
									objectFit="contain"
									layout="fill"
								/>
							</div>
							<Button
								open={isOpen}
								setOpen={setIsOpen}
								label="Quero preencher a aplicação"
							/>
						</div>
					</div>
				</Section>

				<TestimonialGallery />

				<Section classNameS="py-12 sm:py-24 bg-zinc-50 px-4 text-black">
					<div className="flex flex-col items-center gap-4 max-w-xl text-center">
						<h2 className="text-3xl font-semibold">
							Ficou com <span className="text-primary">alguma dúvida?</span>
						</h2>

						<p className="text-base sm:text-lg">
							Tudo o que você precisa é apertar no botão abaixo, preencher sua
							aplicação e entrar em contato com nosso time de matrículas pelo
							WhatsApp.
						</p>
						<Button
							open={isOpen}
							setOpen={setIsOpen}
							label="Quero preencher a aplicação"
						/>
					</div>
				</Section>

				<Modal searchParams={searchParams} open={isOpen} setOpen={setIsOpen} />
			</main>

			<Footer />
		</>
	);
}
