"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Section from "../section";
import { categories } from "@/constants/categories";

export function WhoIsOurPostgraduateFor() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<Section classNameS="w-full py-16 bg-zinc-900">
			<div className="container px-4 md:px-6">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="grid gap-8 lg:grid-cols-2 lg:gap-12"
				>
					<motion.div variants={itemVariants} className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter text-white">
							Para Quem é Nossa{" "}
							<span className="text-primary">Pós-Graduação?</span>
						</h2>
						<p className="mx-auto max-w-[700px] text-white md:leading-relaxed">
							Nossa{" "}
							<span className="font-bold text-primary">pós-graduação</span> é
							ideal para{" "}
							<span className="font-bold text-primary">
								profissionais de saúde ambiciosos{" "}
							</span>
							que buscam{" "}
							<span className="font-bold text-primary">
								impactar positivamente{" "}
							</span>
							e transformar suas carreiras. Ao participar do programa, você se
							junta a uma incrível{" "}
							<span className="font-bold text-primary">
								comunidade de enfermeiros visionários {" "}
							</span>
							comprometidos com a excelência no cuidado ao paciente , inovação e
							liderança. Prepare-se para alcançar novos patamares e contribuir
							de maneira significativa para o futuro da{" "}
							<span className="font-bold text-primary">enfermagem</span>.
						</p>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]"
					>
						<Image
							alt="Nurses collaborating in a modern healthcare setting"
							className="object-cover"
							src="/images/bg.png"
							priority
							width={800}
							height={400}
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
				>
					{categories.map((category, index) => (
						<motion.div
							key={`${category}-${index + 1}`}
							variants={itemVariants}
						>
							<Card className="group relative h-full overflow-hidden transition-colors hover:bg-zinc-50">
								<CardContent className="p-6">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/20">
										{category.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold text-zinc-900">
										{category.title}
									</h3>
									<p className="text-zinc-600">{category.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Section>
	);
}
