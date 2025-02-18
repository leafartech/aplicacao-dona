"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
        pagina?: string
    }
}

export function Form2({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term } }: FormProps) {

    const { push } = useRouter()

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://aprimoresisedu.activehosted.com/f/embed.php?id=31';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {

                const utm_content = new URLSearchParams(window.location.search).get('utm_content')
                const utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign')
                const utm_term = new URLSearchParams(window.location.search).get('utm_term')
                const utm_source = new URLSearchParams(window.location.search).get('utm_source')
                const utm_medium = new URLSearchParams(window.location.search).get('utm_medium')

                // input[name="\\[field\\[655\\]\\]"]

                // const inpt0 = document.getElementById('field[80]') as HTMLInputElement // pagina
                const inpt1 = document.getElementById('field[658]') as HTMLInputElement // utmsource
                const inpt3 = document.getElementById('field[657]') as HTMLInputElement // utmcampaign
                const inpt2 = document.getElementById('field[659]') as HTMLInputElement // utmmedium
                const inpt4 = document.getElementById('field[660]') as HTMLInputElement // utmcontent
                const inpt5 = document.getElementById('field[661]') as HTMLInputElement // utmterm

                if (inpt1) {

                    inpt1.value = utm_source || 'nao-traqueado'
                    inpt2.value = utm_medium || 'nao-traqueado'
                    inpt3.value = utm_campaign || 'nao-traqueado'
                    inpt4.value = utm_content || 'nao-traqueado'
                    inpt5.value = utm_term || 'nao-traqueado'
                }
            }, 2000)
        }
    }, [cont])

    async function sendData() {
        const form = document.querySelector<HTMLFormElement>('form._form');

        if (form) {
            const formData = new FormData(form);
            const postData = new URLSearchParams();

            formData.forEach((value, key) => {
                postData.append(key, value.toString());
            });

            const trabalhaComoEnfermeira = postData.get('field[649]') === "Sim";
            const faculdadePrivada = postData.get('field[650]') === "Faculdade Privada";
            const faculdadePublica = postData.get('field[650]') === "Faculdade Pública";
            const estaFormada = postData.get('field[651]') !== "Ainda não estou formada";
            const rendaMensal = postData.get('field[652]');

            try {
                await fetch('https://aprimoresisedu.activehosted.com/proc.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: postData,
                });

            } catch (error) {
                setTimeout(() => {
                    if (!estaFormada) {
                        push('/parabens2')
                    } else if (
                        (trabalhaComoEnfermeira && faculdadePrivada && estaFormada) ||
                        (trabalhaComoEnfermeira && faculdadePublica && estaFormada) ||
                        (trabalhaComoEnfermeira && faculdadePrivada && !estaFormada) ||
                        (!trabalhaComoEnfermeira && (rendaMensal === "De R$5.000,00 a R$10.000,00" || rendaMensal === "Mais de R$10.000,00"))
                    ) {
                        push('/parabens')
                    } else {
                        push('/parabens2')
                    }
                }, 2000)
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const form = document.querySelector<HTMLFormElement>('form._form');
            const submitButton = document.getElementById('_form_31_submit');

            if (form && submitButton) {
                // Remover possíveis eventListeners duplicados adicionados pelo script externo
                const newForm = form.cloneNode(true) as HTMLFormElement;
                form.parentNode?.replaceChild(newForm, form);

                newForm.addEventListener('submit', (event) => {
                    let isValid = true;
                    const inputs = newForm.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select');

                    inputs.forEach(input => {
                        if (input.value.includes('?')) {
                            isValid = false;
                            input.classList.add('border-red-500'); // Adiciona uma borda vermelha para indicar erro
                        } else {
                            input.classList.remove('border-red-500'); // Remove a borda vermelha caso esteja corrigido
                        }
                    });

                    if (!isValid) {
                        event.preventDefault(); // Bloqueia o envio do formulário
                        event.stopPropagation(); // Impede que outros eventos continuem propagando
                        alert('Por favor, preencha todos os campos corretamente antes de enviar.');
                        newForm.onsubmit = () => false; // Impede o envio mesmo se um script externo tentar submeter
                        return false;
                    }

                    event.preventDefault(); // Bloqueia o envio padrão
                    event.stopPropagation();

                    // Enviando os dados manualmente para Active
                    sendData()
                });
            }
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const selectElements = document.querySelectorAll<HTMLSelectElement>('select');

            // Adiciona o evento change a cada select
            selectElements.forEach(selectElement => {

                if (selectElement.options.length > 0) {
                    selectElement.remove(0)
                }

                const labelId = selectElement['name'].split('[')[1].replace(']', '')

                const label = document.querySelector<HTMLLabelElement>(`label[for="field[${labelId}]"]`);

                const disabledOption = document.createElement('option')

                disabledOption.textContent = label?.textContent ?? ''
                disabledOption.disabled = true
                disabledOption.selected = true

                selectElement.insertBefore(disabledOption, selectElement.firstChild)
            });
        }, 2000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const form = document.querySelector<HTMLFormElement>('form._form');
            const submitButton = document.getElementById('_form_31_submit');

            if (submitButton) {
                submitButton.addEventListener('click', () => {
                    const phoneInput = document.querySelector<HTMLInputElement>('#phone');
                    if (phoneInput && !phoneInput.value.startsWith('+55')) {
                        phoneInput.value = `+55${phoneInput.value}`;
                    }
                });
            }
        }, 2000);
    }, []);

    return (
        <div className="w-full">
            <div id="_forms_31" className={`_form_31 w-full`}></div>
        </div>
    )
}