"use client"

import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import { Modal } from "@/components/modal";
import Section from "@/components/section";
import VideoCard from "@/components/video-card";
import Image from "next/image";
import React, { useState } from "react";

interface PageProps {
    searchParams: {
      utm_content?: string
      utm_campaign?: string
      utm_term?: string
      utm_source?: string
      utm_medium?: string
    }
  } 

export default function Page({ searchParams }: PageProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const disciplines = [
        {
            title: 'Disciplina 1 | Fundamentos da inovação na beira leito: o futuro do cuidado',
            items: [
                'Introdução a inovação na beira leito - 14: 33',
                'O contexto atual e a saúde do futuro - 11:05',
                'O desafio da enfermagem - 10: 45',
                'Introdução ao Hyper Thinking - 09:07',
                'Visão exponencial: como vemos o mundo - 10: 35',
                'Aprendizagem acelerada: como aprendemos - 27: 59',
                'Os seis chapéus do pensamento - 14: 59',
                'Conexões evolutivas e poder de execução - 12: 54',
                'Introdução a inovação na ACP - 11: 33',
                'Perspectiva Ampliada do Cuidado - 09: 36',
                'Relação interprofissional e ACP - 11: 28',
                'Construção de vínculo - 13:00',
                'Introdução as novas relações e modelos de trabalho - 13:00',
                'Entrega virtual de saúde - 22:08',
                'Implicações da entrega virtual na enfermagem - 13: 26',
                'Transformação digital na enfermagem - 11: 14',
                'Sustentabilidade, equidade e força de trabalho - 08: 50',
                'Atividade obrigatória',
                'Indicação de leitura',
            ],
        },
        {
            title: 'Disciplina 2 | Gestão de Recursos e Logística em Emergências Hospitalares',
            items: [
                'Introdução à gestão no cuidados - 10: 29',
                'O processo de gerenciar conflitos - 06: 43',
                'O antagonismo da enfermagem - 11: 20',
                'Competências na gestão dos cuidados - 14: 54',
                'Competências da enfermeira gestora - 16: 12',
                'Introdução: Códigos e fluxos - 38: 49',
                'Alinhamento multiprofissional - 22: 11',
                'Safety Huddle - 12:05',
                'Cuidados proporcionais e metas - 17: 42',
                'Introdução à segurança do paciente e gestão da qualidade - 08: 55',
                'As dimensões da gestão de cuidados - 22: 24',
                'Discussão sobre caso real - 08: 58',
                'Trilogia de Juran, ferramentas proativas e cultura de qualidade - 11: 24',
                'Segurança psicológica e cultura de segurança - 08: 52',
                'Apresentação do caso 1 - 10: 42',
                'Apresentação e discussão caso 2 - 18: 55',
                'Apresentação e discussão do caso 3 - 18: 52',
                'Fórum de discussão',
            ],
        },
        {
            title: 'Disciplina 3 | Prática avançada da enfermagem e rotinas assistenciais diante do paciente que intercorre',
            items: [
                'Introdução a EPA - 17:40',
                'Quem é o profissional da EPA - 18:46',
                'Perfis de atuação e implicações - 18:34',
                'Aprofundando noções sobre PAE - 10:56',
                'Entendendo intercorrências - 08:40',
                'Base clínica da PAE - 29:11',
                'Vigilância clínica do paciente - 24:58',
                'Introdução ao raciocínio clínico - 12:23',
                'Teoria do processamento dual - 16:00',
                'Etapas do raciocínio e o julgamento clínico - 08:57',
                'Desenvolvimento e aprimoramento do raciocínio clínico - 07:48',
                'Conceitos para construção do mapa mental - Parte 1',
                '1. Caso clínico 1 (etapa 1) - 28:01',
                '2. Caso clínico 1 (etapa 2) - 31:24',
                '3. Caso clínico 2 - 22:21',
            ],
        },
        {
            title: 'Disciplina 4 | Liderança e Gestão de Equipe',
            items: [
                'Contexto inicial da liderança criativa - 19:15',
                'Perfil do líder criativo - 28:46',
                'Introdução ao encantamento do cliente interno - 35:42',
                'Liderança inspiradora - 26:18',
                'Lidando conflitos a partir da liderança inspiradora - 20:28',
                'Influência da liderança na cultura organizacional - 06:48',
                'Dimensões do líder inspirador - 21:24',
                'Ferramenta de gestão eficiente de recursos humanos - 26:18',
                'Introdução ao mindset de inovação na liderança - 25:14',
                'Autoconsciência como ferramenta do mindset de inovação - 12:23',
                'Composição de um profissional completo - 27:47',
                'Confiança como ferramenta do mindset de inovação - 17:30',
                'Empatia como ferramenta do mindset de inovação - 17:19',
                'Entendendo sobre soft skills - 16:49',
                'Como resolver problemas? - 15:51',
                'Gestão de pessoas - 18:24',
                'Review dos conceitos - 30:37',
                'Situação global dos ambientes de mercado - 27:41',
                'Influência do carisma e o autoconhecimento - 26:14',
                'Relevância do autodomínio - 15:06',
                'Conceituando conflitos e entendendo sua relevância - 17:20',
                'Discussão sobre experiências conflituosas - 28:22',
                'Caminho do conflito e estratégias para evitá-lo - 33:19',
                'Negociação e comunicação não-violenta para a resolução do conflito - 15:14',
                'Introdução ao contexto dos desafios da enfermagem - 23:06',
                'Primeiros passos para mudar o seu contexto - 18:00',
                'Etapas da resolução de conflitos - 08:53',
                'Atividade prática: Solucionando problemas a partir de processos - 24:56',
                'As habilidades esperadas de um enfermeiro padrão - 19:23',
                'Como desenvolver habilidades de liderança - 10:05',
                'Dimensionamento de enfermagem e escala de plantão - 10:04',
                'Fórum de discussão',
                'Atividade: Construindo seu perfil MBTI',
            ],
        },
        {
            title: 'Disciplina 5 | Tomada de decisão',
            items: [
                'PPP: Princípio, preferências e pensamento crítico - 24:03',
                'Avaliação primária - 29:43',
                'Noções iniciais e interpretação de ECG - 23:42',
                'Introdução a Ultrassom Point Of Care - 15:01',
                'Ultrassom como ferramenta de cuidado - 26:14',
                'Compreendendo o USG - 14:30',
                'Estratégias para começar a utilizar a Ultrassom - 07:06',
                'Introdução a Gasometria - 13:30',
                'Fundamentos da Gasometria - 14:59',
                'Análise bioquímica - 19:29',
                'Fundamentos do princípio ácido-base - 27:55',
                'Simulação clínica - Caso 1 - 40:36',
                'Debriefing - Caso 1 - 34:39',
                'Simulação clínica - Caso 2 - 18:11',
                'Debriefing - Caso 2 - 26:49',
                'Simulação clínica - Caso 3 - 13:41',
                'Debriefing - Caso 3 - 18:46',
            ],
        },
        {
            title: 'Disciplina 6 | Urgências Cardiovasculares',
            items: [
                'Fundamentação | Função Cardiovascular',
                'Síndrome Coronariana Aguda - 19:14',
                'Sistema de cuidados centrados no paciente com SCA - 10:20',
                'Tomada de decisão - 13:21',
                'Interpretação de ECG - 19:30',
                'Manejo inicial com Killip-Kimball e Escore Heart - 09:49',
                'Farmacologia na SCA - 25:44',
                'Atuação do enfermeiro no contexto da Insuficiência Cardíaca Aguda - 15:54',
                'Avaliação de risco imediato a vida e cuidados na ICA - 20:18',
                'Introdução à atuação do enfermeiro no contexto de arritmias - 13:00',
                'Arritmias: Taquiarritmias',
                'Arritmias: Bradiarritmia',
                'Casos clínicos e identificação de arritmias - 28:40',
                'Distúrbios de condução e casos clínicos - 11:04',
                'Tratamentos químicos e elétricos para arritmias e bloqueios - 11:11',
                'Caso clínico - Sala vermelha - 27:34',
                'Debriefing do caso - 40:47',
                'Caso clínico - Enfermaria - 20:20',
                'Debriefing do caso - 41:19',
            ]
        },
        {
            title: 'Disciplina 7 | Urgências Gastrointestinais, Renais e Metabólicas',
            items: []
        },
        {
            title: 'Disciplina 8 | Urgências maternas e cuidados com o recém nascido',
            items: []
        },
        {
            title: 'Disciplina 9 | Condições de Choque',
            items: []
        },
        {
            title: 'Disciplina 10 | Farmacologia Avançada',
            items: []
        },
        {
            title: 'Disciplina 11 | Rotinas Hospitalares',
            items: []
        },
        {
            title: 'Disciplina 12 | Enfermagem Baseada em Evidência',
            items: []
        },
    ]

    return (
        <>
            <header className="relative w-full sm:h-screen h-[1024px] bg-zinc-900 flex sm:items-center sm:justify-center items-start sm:pt-0 pt-12">
                <div className="sm:grid sm:grid-cols-2 flex flex-col gap-8 px-4">
                    <div className="max-w-2xl flex flex-col gap-8 text-white">
                        <h1 className="text-2xl sm:text-4xl font-semibold">Pós-Graduação em <span className="text-orange-500">Enfermagem em Urgência</span> e <span className="text-orange-500">Emergência Hospitalar</span> com Ênfase em Inovação</h1>
                        <ul className="flex flex-col gap-4 sm:ps-4 text-zinc-100">
                            <li className="">{'>'} <strong>Simulações realísticas</strong> (presenciais ou online) para você <strong>desenvolver sua segurança</strong> nos plantões</li>
                            <li className="">{'>'} Conteúdos vivenciais voltados para a prática para que você seja <strong>reconhecida como referência pelos seus colegas</strong> de trabalho</li>
                            <li className="">{'>'} Habilidades socioemocionais para que você <strong>lidere a sua equipe sem parecer autoritária ou {`“`}boazinha{`”`}</strong> demais</li>
                        </ul>
                        <Button open={isOpen} setOpen={setIsOpen} label="Quero preencher a aplicação" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-full h-[500px] sm:w-[512px] sm:h-[764px] z-50">
                        <Image
                            src="/images/bg2.png"
                            alt="Ted Talks Imagem"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-xl"
                        />
                    </div>
                </div>
                <div className="absolute right-0 sm:top-0 bottom-0 w-40 h-40 bg-orange-500 blur-[124px]"></div>
            </header>
            <main>
                <Section classNameS="py-16 sm:py-24 bg-zinc-50 px-4 text-black">
                    <div className="sm:grid sm:grid-cols-2 flex flex-col items-center">
                        <div className="relative sm:w-[512px] sm:h-[394px]">
                            <Image
                                src="/images/ted.png"
                                alt="Ted Talks Imagem"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-xl"
                            />
                        </div>
                        <div className="sm:max-w-xl flex flex-col gap-4 sm:gap-8">
                            <h2 className="text-3xl font-semibold">Por que nossa Pós é única?</h2>
                            <div className="flex flex-col gap-4 text-lg">
                                <p>Diferentemente das outras Pós-Graduações do mercado que são muita teoria e pouca prática…</p>
                                <p>Aqui, <strong>você aprende de fato com quem dá plantões</strong>.</p>
                                <p>Todo o <strong>nosso conteúdo é validado por mais de <span className="text-orange-500">150 mil horas</span></strong> de plantões dos nossos professores e facilitadores.</p>
                                <p>Toda essa experiência prática nos <strong className="text-orange-500">permite ensinar a você o que realmente dá segurança</strong> nos plantões</p>
                                <p>Além disso, nosso conteúdo também é comprovado por mais de <strong>centenas de alunas enfermeiras DONAs do Plantão</strong> que estão atuando com postura e segurança em todo o Brasil.</p>
                            </div>
                            {/* <Button label="Quero preencher a aplicação" /> */}
                        </div>
                    </div>
                </Section>
                <Section classNameS="pt-2 pb-12 sm:py-12 bg-zinc-50 px-4">
                    <div className="flex flex-col items-center gap-8 sm:gap-12">
                        <div className="flex flex-wrap gap-12">
                            <VideoCard
                                colors={true}
                                name="Etiana Oliveira"
                                description="Técnica de enfermagem por 10 anos, hoje é a enfermeira amada pela equipe"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=9fc3e50d-22ab-4a35-847c-4993f95773dd&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                colors={true}
                                name="Paula Marangoni"
                                description="Já tinha desistido da enfermagem, por não conseguir nenhum emprego, até que…"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=390322b3-cfe6-409a-af93-c515fef6b027&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                colors={true}
                                name="Elionara Fernandes"
                                description="Liderou uma PCR na época do covid que impressionou até a fisioterapeuta"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=a9daf0ff-953a-4240-ae37-20329b645cbf&iosFakeFullscreen=true"
                            />
                        </div>
                        <Button open={isOpen} setOpen={setIsOpen} label="Quero preencher a aplicação" />
                    </div>
                </Section>
                <Section classNameS="relative py-14 sm:py-24 bg-zinc-900 px-4">
                    <div className="flex flex-col items-center gap-8 sm:gap-12 text-white">
                        <h2 className="text-3xl font-semibold">Confira nossa Plataforma por dentro</h2>
                        <div className="w-full flex flex-wrap gap-12">
                            <VideoCard
                                colors={true}
                                // name="Etiana Oliveira"
                                // description="Técnica de enfermagem por 10 anos, hoje é a enfermeira amada pela equipe"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=bd28656d-7d65-452b-98cf-189fc1a7f3c2&iosFakeFullscreen=true"
                                className="w-full max-w-2xl"
                                classNameVideo="h-[316px] rounded"
                            />
                        </div>
                        <Button open={isOpen} setOpen={setIsOpen} label="Quero preencher a aplicação" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-40 h-40 bg-orange-500 blur-[124px]"></div>
                </Section>
                <Section classNameS="py-12 sm:py-24 bg-zinc-50 px-4 text-black">
                    <div className="flex flex-col items-start sm:items-center gap-6 sm:gap-12">
                        <div className="flex flex-col sm:items-center">
                            <h2 className="text-2xl sm:text-3xl font-semibold">Conteúdo Programático</h2>
                            <p className="mt-2 text-zinc-600 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-zinc-600"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 97q-14 0-26.5-3.5T430-194q-39-23-82-34.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-45 0-88 11.5T530-194q-11 6-23.5 9.5T480-181ZM280-494Zm280-115q0-9 6.5-18.5T581-640q29-10 58-15t61-5q20 0 39.5 2.5T778-651q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-600q-26 0-51 5t-48 13q-18 7-29.5-1T560-609Zm0 220q0-9 6.5-18.5T581-420q29-10 58-15t61-5q20 0 39.5 2.5T778-431q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-380q-26 0-51 4.5T601-363q-18 7-29.5-.5T560-389Zm0-110q0-9 6.5-18.5T581-530q29-10 58-15t61-5q20 0 39.5 2.5T778-541q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-490q-26 0-51 5t-48 13q-18 7-29.5-1T560-499Z" /></svg>
                                <span>Carga horária: 360 horas</span>
                            </p>
                            <p className="text-zinc-600 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-zinc-600"><path d="m480-483-68 52q-6 5-12 .5t-4-11.5l26-84-70-56q-5-5-3-11.5t9-6.5h86l26-82q2-7 10-7t10 7l26 82h85q7 0 9.5 6.5T608-582l-71 56 26 84q2 7-4 11.5t-12-.5l-67-52Zm0 363L293-58q-20 7-36.5-5T240-95v-254q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v254q0 20-16.5 32T667-58l-187-62Zm0-200q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" /></svg>
                                <span>Reconhecido pelo MEC</span>
                            </p>
                            <p className="text-zinc-600 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-zinc-600"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                                <span>Duração: 12 meses</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {disciplines.map((discipline, index: number) => (
                                <React.Fragment key={index}>
                                    <Dropdown data={discipline} key={index} />
                                    {index + 1 !== disciplines.length && <hr />}
                                </React.Fragment>

                            ))}
                        </div>
                        <div className="w-full flex flex-col items-center gap-12">
                            <div className="relative h-[150px] w-[150px]">
                                <Image
                                    src="/images/selo.webp"
                                    alt="Selo de Graduação reconhecida pelo MEC"
                                    objectFit="contain"
                                    layout="fill"
                                />
                            </div>
                            <Button open={isOpen} setOpen={setIsOpen} label="Quero preencher a aplicação" />
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-0 bg-zinc-50 px-4 text-black">
                    <div className="flex flex-col items-center gap-8 sm:gap-12 text-center">
                        <h2 className="text-3xl font-semibold text-center">O que nossas aulas estão falando?</h2>
                        <div className="flex sm:flex-row flex-col gap-8 justify-center">
                            <div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
                                <Image
                                    src="/images/print1.jpg"
                                    objectFit="contain"
                                    alt="Depoimento de aluna"
                                    layout="fill"
                                />
                            </div>
                            <div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
                                <Image
                                    src="/images/print2.jpg"
                                    objectFit="contain"
                                    alt="Depoimento de aluna"
                                    layout="fill"
                                />
                            </div>
                            <div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
                                <Image
                                    src="/images/print3.jpg"
                                    objectFit="contain"
                                    alt="Depoimento de aluna"
                                    layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 bg-zinc-50 px-4 text-black">
                    <div className="flex flex-col items-center gap-4 max-w-xl text-center">
                        <h2 className="text-3xl font-semibold">Ficou com alguma dúvida?</h2>
                        <p className="text-base sm:text-lg">Tudo o que você precisa é apertar no botão abaixo, preencher sua aplicação e entrar em contato com nosso time de matrículas pelo WhatsApp.</p>
                        <Button open={isOpen} setOpen={setIsOpen} label="Quero preencher a aplicação" />
                    </div>
                </Section>
                <Modal
                    searchParams={searchParams}
                    open={isOpen}
                    setOpen={setIsOpen}
                />
            </main>
            <footer className="text-center bg-zinc-900 text-white py-2 text-sm">
                <p className="opacity-80"><strong>Dona do Plantão</strong> | Todos os direitos reservados.</p>
                <p className="opacity-80">Políticas de Privacidade.</p>
            </footer>
        </>
    )
}
