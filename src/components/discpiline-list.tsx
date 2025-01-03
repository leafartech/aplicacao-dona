"use client";

import { useState } from "react";
import {
	PlayCircle,
	BookOpen,
	MessageSquare,
	ClipboardCheck,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Discipline {
	title: string;
	items: string[];
}

interface DisciplineListProps {
	disciplines: Discipline[];
}

export function DisciplineList({ disciplines }: DisciplineListProps) {
	const [expandedDisciplines, setExpandedDisciplines] = useState<string[]>([]);

	const getItemIcon = (item: string) => {
		if (item.includes("Atividade obrigatória"))
			return <ClipboardCheck className="h-4 w-4 text-red-500" />;
		if (item.includes("Fórum"))
			return <MessageSquare className="h-4 w-4 text-blue-500" />;
		if (item.includes("leitura"))
			return <BookOpen className="h-4 w-4 text-emerald-500" />;
		return <PlayCircle className="h-4 w-4 text-zinc-500" />;
	};

	const getItemDuration = (item: string) => {
		const match = item.match(/- (\d+:\s?\d+)/);
		return match ? match[1].replace(" ", "") : null;
	};

	const formatTitle = (title: string) => {
		const [number, name] = title.split(" | ");
		return { number: number.trim(), name: name?.trim() };
	};

	return (
		<div className="container mx-auto p-4 md:p-6">
			<div className="grid gap-6 md:gap-8">
				{disciplines.map((discipline, index) => {
					const { number, name } = formatTitle(discipline.title);

					return (
						<Card
							key={`${discipline}-${index + 1}`}
							className="overflow-hidden"
						>
							<CardHeader className="space-y-1 bg-primary-light/5 pb-4">
								<div className="text-sm font-medium text-primary-dark">
									{number}
								</div>
								<CardTitle className="line-clamp-2 text-lg text-zinc-900">
									{name}
								</CardTitle>
							</CardHeader>

							<CardContent className="p-0">
								{discipline.items.length > 0 ? (
									<Accordion
										type="single"
										collapsible
										className="w-full"
										onValueChange={(value) => {
											if (value) {
												setExpandedDisciplines([
													...expandedDisciplines,
													`${index}`,
												]);
											} else {
												setExpandedDisciplines(
													expandedDisciplines.filter((id) => id !== `${index}`),
												);
											}
										}}
									>
										<AccordionItem value={`${index}`} className="border-0">
											<AccordionTrigger className="px-6 py-3 hover:bg-zinc-50">
												<span className="text-sm font-medium">
													{expandedDisciplines.includes(`${index}`)
														? "Recolher conteúdo"
														: "Ver conteúdo"}
												</span>
											</AccordionTrigger>
											<AccordionContent>
												<div className="divide-y">
													{discipline.items.map((item, itemIndex) => {
														const duration = getItemDuration(item);
														const icon = getItemIcon(item);
														const isSpecialItem =
															item.includes("Atividade obrigatória") ||
															item.includes("Fórum") ||
															item.includes("leitura");

														return (
															<div
																key={`${item}-${itemIndex + 1}`}
																className={cn(
																	"flex items-start gap-3 px-6 py-3 transition-colors hover:bg-zinc-50",
																	isSpecialItem && "bg-zinc-50/50",
																)}
															>
																<div className="mt-1 flex-shrink-0">{icon}</div>
																<div className="flex-1 text-sm">
																	<div className="flex items-center gap-2">
																		<span className="flex-1">
																			{item.split(" - ")[0]}
																		</span>
																		{duration && (
																			<Badge
																				variant="secondary"
																				className="ml-auto flex-shrink-0"
																			>
																				{duration}
																			</Badge>
																		)}
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								) : (
									<div className="flex items-center justify-center px-6 py-8 text-center text-sm text-zinc-500">
										Conteúdo em breve
									</div>
								)}
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
