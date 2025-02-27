"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

function Select({ label, onChange, options, placeholder }: { onChange: (e: ChangeEvent<HTMLSelectElement>) => void, placeholder: string, label: string, options: string[] }) {

    return (
        <select
            className="w-full border border-zinc-400 outline-none text-zinc-700"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}
        >
            <option>{label}</option>
            {options.map((opt: string, index: number) => (
                <option key={opt + index} value={opt}>{opt}</option>
            ))}
        </select>
    )
}

const fields = [
    {
        name: 'name',
        type: 'text'
    },
    {
        name: 'email',
        type: 'text'
    },
    {
        name: 'cellphone',
        type: 'text'
    },
    {
        name: 'tipo_faculdade',
        type: 'select'
    },
    {
        name: 'quanto_tempo_formada',
        type: 'select'

    },
    {
        name: 'trabalha_como_enfermeira',
        type: 'select'

    },
    {
        name: 'setor_que_trabalha',
        type: 'text'

    },
    {
        name: 'tem_pos',
        type: 'select'

    },
    {
        name: 'em_que_e_qual_instituicao_pos',
        type: 'text'

    },
    {
        name: 'prioridade_carreira',
        type: 'select'

    },
    {
        name: 'impedir_matricular',
        type: 'select'

    },
    {
        name: 'renda_mensal',
        type: 'select'

    },
]

type DataType = {
    name: string
    email: string
    cellphone: string
    tipo_faculdade: string
    quanto_tempo_formada: string
    trabalha_como_enfermeira: string
    setor_que_trabalha: string
    tem_pos: string
    em_que_e_qual_instituicao_pos: string
    prioridade_carreira: string
    impedir_matricular: string
    renda_mensal: string
}

const initialData = {
    name: '',
    email: '',
    cellphone: '',
    tipo_faculdade: '',
    quanto_tempo_formada: '',
    trabalha_como_enfermeira: '',
    setor_que_trabalha: '',
    tem_pos: '',
    em_que_e_qual_instituicao_pos: '',
    prioridade_carreira: '',
    impedir_matricular: '',
    renda_mensal: '',
}

const selectOptions = {
    tipo_faculdade: [
        'Faculdade pública',
        'Faculdade privada',
    ],
    quanto_tempo_formada: [
        'Ainda não estou formada *Caso seja selecionado esse aqui, parte pro Fluxo faculdade',
        'Há 6 meses ou menos',
        'Entre 6 meses e 1 ano',
        'Entre 1 a 5 anos',
        'Entre 5 a 10 anos',
        'Há mais de 10 anos',
    ],
    trabalha_como_enfermeira: [
        'Sim', // *Se selecionado, vai pra pergunta 7*
        'Não' // *Se selecionado, vai pra pergunta 8 direto*
    ],
    tem_pos: [
        'Sim, já concluí', // *se selecionado, vai pra pergunta 9*'
        'Não, mas estou matriculada/cursando', // *se selecionado, vai pra pergunta 9*'
        'Não', // *se selecionado, vai pra pergunta 10 direto*'
    ],
    prioridade_carreira: [
        'Quero atuar na assistência: hospital / homecare / atenção básica / uti / emergência / enfermaria, etc…',
        'Quero uma especialidade fora da assistência hospitalar: estética, dermato, furo humanizado, feridas, pediatria, obstetrícia, etc…',
    ],
    impedir_matricular: [
        'Tenho um orçamento baixo para investir na minha qualificação profissional',
        'Até tenho um bom orçamento, mas o preço precisa ser justo',
        'Basta a Pós valer a pena, o investimento não vai ser um problema',
    ],
    renda_mensal: [
        'Até R$2.000,00',
        'De R$2.000,00 a R$5.000,00',
        'De R$5.000,00 a R$10.000,00',
        'Mais de R$10.000,00',
    ]
}

const labels = [
    'Qual é o seu nome?',
    'Qual é o seu melhor e-mail?',
    'Qual é o seu whatsapp?',
    'Em qual faculdade foi sua graduação?',
    'Há quanto tempo você está formada?',
    'Você trabalha atualmente como enfermeira?',
    'Em qual setor você trabalha?',
    'Você já tem Pós-Graduação?',
    'Em que é a sua Pós e por qual instituição?',
    'Qual é a prioridade na sua carreira hoje?',
    'O que poderia te impedir de se matricular na nossa Pós?',
    'Qual é a sua renda mensal?',
]

export function Form3() {

    const { push } = useRouter()
    const [steps, setSteps] = useState<number>(0)
    const [data, setData] = useState<DataType>(initialData)
    const [error, setError] = useState<string>('')


    function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, name: keyof typeof initialData) {
        setError('')
        setData(prevState => ({
            ...prevState,
            [name]: e.target.value
        }))
        console.log(data)
    }

    return (
        <div className="w-full">
            <form className="flex flex-col gap-4">
                <div className="relative">
                    {fields.map((field, index) => {
                        if (index !== steps) {
                            return <></>
                        } else if (field.type === 'text') {
                            return (
                                <input
                                    placeholder={labels[index]}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                    className="w-full border border-zinc-400 outline-none text-black bg-transparent rounded-md p-1"
                                />
                            )
                        } else {
                            return (
                                <Select
                                    label={labels[index]}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                    options={selectOptions[field.name as keyof typeof selectOptions]}
                                    placeholder={labels[index]}
                                />
                            )
                        }
                    })}
                    <span className="absolute -bottom-5 left-1 w-full text-red-500 text-xs">{error}</span>
                </div>
                {/* <Select
                    label="Em qual faculdade foi sua graduação?"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e, 'tipo_faculdade')}
                    options={selectOptions['tipo_faculdade']}
                    placeholder="Em qual faculdade foi sua graduação?"
                /> */}
                <div className="w-full flex items-center justify-between">
                    <button
                        type="button"
                        className={`border text-xs uppercase text-zinc-700 flex items-center justify-center gap-1 p-2 rounded-lg ${steps === 0 && 'pointer-events-none opacity-30'}`}
                        onClick={() => {
                            if (steps > 0) setSteps(steps - 1)
                        }}>
                        <svg className="-rotate-180" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                        {/* <span>Voltar</span> */}
                    </button>
                    <button
                        type="button"
                        className={`border text-xs uppercase bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 p-2 rounded-lg`}
                        onClick={() => {
                            if (data[fields[steps].name as keyof typeof initialData].length === 0) {
                                setError('Preencha este campo corretamente.')
                            } else if (steps < 12) setSteps(steps + 1)
                        }}>
                        {/* <span>Próximo</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

// Qual é o seu nome?

// Qual é o seu melhor e-mail?

// Qual é o seu whatsapp?

// Em qual faculdade foi sua graduação?
// 	Faculdade pública
// 	Faculdade privada

// Há quanto tempo você está formada?
// 	Ainda não estou formada *Caso seja selecionado esse aqui, parte pro Fluxo faculdade
// 	Há 6 meses ou menos
// 	Entre 6 meses e 1 ano
// 	Entre 1 a 5 anos
// 	Entre 5 a 10 anos
// Há mais de 10 anos
	
// Você trabalha atualmente como enfermeira?
// 	Sim *se selecionado, vai pra pergunta 7*
// 	Não *se selecionado, vai pra pergunta 8 direto*

// Em qual setor você trabalha?
// [campo aberto] 

// Você já tem Pós-Graduação?
// 	Sim, já concluí *se selecionado, vai pra pergunta 9*
// 	Não, mas estou matriculada/cursando *se selecionado, vai pra pergunta 9*
// 	Não *se selecionado, vai pra pergunta 10 direto*

// Em que é a sua Pós e por qual instituição?
// 	Ex: UTI pela PUC
// [campo aberto]

// Qual é a prioridade na sua carreira hoje?
// 	Quero atuar na assistência: hospital / homecare / atenção básica / uti / emergência / enfermaria, etc…
// 	Quero uma especialidade fora da assistência hospitalar: estética, dermato, furo humanizado, feridas, pediatria, obstetrícia, etc…

// O que poderia te impedir de se matricular na nossa Pós?
// 	Tenho um orçamento baixo para investir na minha qualificação profissional
// 	Até tenho um bom orçamento, mas o preço precisa ser justo
// 	Basta a Pós valer a pena, o investimento não vai ser um problema

// Qual é a sua renda mensal?
// 	Até R$2.000,00
// 	De R$2.000,00 a R$5.000,00
// 	De R$5.000,00 a R$10.000,00
// 	Mais de R$10.000,00