'use client'

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

export function Form({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term } }: FormProps) {

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