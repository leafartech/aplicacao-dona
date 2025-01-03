import { GraduationCap, Stethoscope, Brain } from "lucide-react";

export const categories = [
	{
		icon: <Stethoscope className="h-6 w-6 text-primary-dark" />,
		description:
			"Ideal para enfermeiros registrados que desejam aprofundar seus conhecimentos em áreas específicas da saúde e cuidado ao paciente.",
		title: "Enfermeiros Especializados",
	},
	{
		icon: <GraduationCap className="h-6 w-6 text-primary-dark" />,
		title: "Profissionais em Ascensão",
		description:
			"Desenvolvido para profissionais de saúde que desejam alcançar posições de liderança ou funções clínicas avançadas.",
	},
	{
		icon: <Brain className="h-6 w-6 text-primary-dark" />,
		title: "Líderes em Inovação",
		description:
			"Ideal para aqueles apaixonados por práticas baseadas em evidências e inovação no cuidado de enfermagem.",
	},
];
