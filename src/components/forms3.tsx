"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

function Select({ label, onChange, options, placeholder, value }: { onChange: (e: ChangeEvent<HTMLSelectElement>) => void, placeholder: string, label: string, options: string[], value: string }) {

    return (
        <select
            value={value}
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

const fields_case1 = [
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

const fields_case2 = [
    {
        name: 'renda_mensal',
        type: 'select'
    },
    {
        name: 'periodo',
        type: 'select'
    },
    {
        name: 'ao_formar_atuar',
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
    periodo: string,
    ao_formar_atuar: string
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
    periodo: '',
    ao_formar_atuar: ''
}

const selectOptions = {
    tipo_faculdade: [
        'Faculdade pública',
        'Faculdade privada',
    ],
    quanto_tempo_formada: [
        'Ainda não estou formada',
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
    ],
    periodo: [
        '1º ao 5º',
        '6º ao 8º',
        '9º',
        '10º    ',
    ],
    ao_formar_atuar: [
        'Eu vou para onde aparecer',
        'Concurso público',
        'Quero atuar na assistência: hospital / homecare / atenção básica / uti / emergência / enfermaria, etc…',
        'Quero uma especialidade fora da assistência hospitalar: estética, dermato, furo humanizado, feridas, pediatria, obstetrícia, etc…',
    ],
}

const labels_case1 = [
    'Você trabalha atualmente como enfermeira?',
    'Em qual setor você trabalha?',
    'Você já tem Pós-Graduação?',
    'Em que é a sua Pós e por qual instituição?',
    'Qual é a prioridade na sua carreira hoje?',
    'O que poderia te impedir de se matricular na nossa Pós?',
    'Qual é a sua renda mensal?',
]

const labels_case2 = [
    'Qual é a sua renda mensal?',
    'Em qual período você está?',
    'Ao se formar, onde você pretende atuar?'
]

export function Form3() {

    const { push } = useRouter()
    const [steps, setSteps] = useState<number>(0)
    const [data, setData] = useState<DataType>(initialData)
    const [error, setError] = useState<string>('')
    const [formsCase, setFormsCase] = useState(0)

    const fields = useMemo(() => {

        if (data.quanto_tempo_formada === 'Ainda não estou formada') {
            setFormsCase(2)
            return [
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
                ...fields_case2
            ]
        } else {
            setFormsCase(1)
            return [
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
                ...fields_case1
            ]
        }
    }, [data])

    const labels = useMemo(() => {

        if (data.quanto_tempo_formada === 'Ainda não estou formada') {
            return [
                'Qual é o seu nome?',
                'Qual é o seu melhor e-mail?',
                'Qual é o seu whatsapp?',
                'Em qual faculdade foi sua graduação?',
                'Há quanto tempo você está formada?',
                ...labels_case2
            ]
        } else {
            return [
                'Qual é o seu nome?',
                'Qual é o seu melhor e-mail?',
                'Qual é o seu whatsapp?',
                'Em qual faculdade foi sua graduação?',
                'Há quanto tempo você está formada?',
                ...labels_case1
            ]
        }
    }, [data])

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, name: keyof typeof initialData) {
        setError('')

        if (name === 'cellphone') {
            setData(prevState => ({
                ...prevState,
                [name]: formatPhone(e.target.value)
            }))
        } else {
            setData(prevState => ({
                ...prevState,
                [name]: e.target.value
            }))
        }
    }

    function formatPhoneToE164(phone: string): string {
        // Remove todos os caracteres não numéricos
        const digits = phone.replace(/\D/g, "");
    
        // Verifica se tem o DDD (2 primeiros dígitos após o "55")
        if (digits.length === 11) {
            return `+55${digits}`;
        }
    
        // Se o número tiver menos de 11 dígitos, pode estar inválido
        throw new Error("Número inválido. Certifique-se de que está no formato correto.");
    }

    async function formSubmited(e: FormEvent) {
        // e.preventDefault()

        const utm_content = new URLSearchParams(window.location.search).get('utm_content') || 'nao-traqueado'
        const utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') || 'nao-traqueado'
        const utm_term = new URLSearchParams(window.location.search).get('utm_term') || 'nao-traqueado'
        const utm_source = new URLSearchParams(window.location.search).get('utm_source') || 'nao-traqueado'
        const utm_medium = new URLSearchParams(window.location.search).get('utm_medium') || 'nao-traqueado'

        try {
            // const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
            const response = await fetch('https://services.leadconnectorhq.com/hooks/V4asAT7IrV5IdErLl2Fr/webhook-trigger/10b76af7-c88c-42bf-a22c-1936cd479ffa', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer pit-ee6d46b4-c92d-4e68-b3c6-735bf5bb2377`, // Armazene a chave de API em variáveis de ambiente
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    trabalha_como_enfermeira: data.trabalha_como_enfermeira,
                    firstName: data.name,
                    email: data.email,
                    phone: formatPhoneToE164(data.cellphone),
                    utm_content,
                    utm_campaign,
                    utm_term,
                    utm_source,
                    utm_medium,
                    pagina: 'v3'
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao enviar os dados');
            }

            // if (data.quanto_tempo_formada !== 'Ainda não estou formada') {
            //     push('/parabens')
            // } else {
            //     push('/parabens2')
            // }

            console.log('Contato criado com sucesso:', result);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-4">
                <div className="relative">
                    {fields.map((field, index: number) => {
                        if (index !== steps) {
                            return <></>
                        } else if (field.type === 'text') {
                            return (
                                <input

                                    // @ts-ignore
                                    value={data[field.name]}
                                    maxLength={field.name === 'cellphone' ? 15 : undefined}
                                    minLength={field.name === 'cellphone' ? 15 : undefined}
                                    type={field.name === 'email' ? 'email' : undefined}
                                    placeholder={labels[index]}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                    className="w-full text-sm border border-zinc-400 outline-none text-black bg-transparent rounded-md py-[6px] px-2"
                                />
                            )
                        } else {
                            return (
                                <Select
                                    // @ts-ignore
                                    value={data[field.name]}
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
                    {steps < fields.length - 1 ? (
                        <button
                            type="button"
                            className={`border text-xs uppercase bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 p-2 rounded-lg`}
                            onClick={() => {
                                const verifyEmail = fields[steps].name === 'email' && !data[fields[steps].name].includes('@') && !data[fields[steps].name].includes('.')
                                const verifyCellphone = fields[steps].name === 'cellphone' && data[fields[steps].name].length !== 15

                                // @ts-ignore
                                if (data[fields[steps].name].length === 0 || data[fields[steps].name].includes('?') || verifyEmail || verifyCellphone) {
                                    setError('Preencha o campo acima corretamente')
                                } else if (formsCase === 1) { // Formada

                                    if (data.trabalha_como_enfermeira === 'Não') {

                                        setSteps(prevState => prevState + 2)
                                    } else {

                                        setSteps(prevState => prevState + 1)
                                    }
                                } else { // Não formada

                                    setSteps(prevState => prevState + 1)
                                }
                            }}>
                            {/* <span>Próximo</span> */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                        </button>
                    ) : (
                        <button
                            onClick={e => {

                                // @ts-ignore
                                if (data[fields[steps].name].includes('?')) {
                                    setError('Preencha o campo acima corretamente')
                                } else {
                                    formSubmited(e)
                                }
                            }}
                            type="submit"
                            className={`border text-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 p-2 rounded-lg`}>
                            <span>Enviar aplicação</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}