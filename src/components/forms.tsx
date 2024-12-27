"use client";

import { useEffect } from "react";

interface FormProps {
	searchParams: {
		utm_content?: string;
		utm_campaign?: string;
		utm_term?: string;
		utm_source?: string;
		utm_medium?: string;
		pagina?: string;
	};
}

export function Form({
	searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term },
}: FormProps) {
    let cont = 0;

	useEffect(() => {
		if (cont === 0) {
			const script = document.createElement("script");
            script.src = 'https://aprimoresisedu.activehosted.com/f/embed.php?id=28';
			script.type = "text/javascript";
			script.charset = "utf-8";
			script.async = true;

			document.body.appendChild(script);
			cont++;
		}
	}, [cont]);


    useEffect(() => {
        setTimeout(() => {
            const selectElements = document.querySelectorAll<HTMLSelectElement>('select');
            
			for (const selectElement of selectElements) {
				if (selectElement.options.length > 0) {
					selectElement.remove(0);
				}

				const labelId = selectElement.name.match(/\d+/)?.[0];

				if (labelId) {
					const label = document.querySelector<HTMLLabelElement>(`label[for="field[${labelId}]"]`);

					const disabledOption = document.createElement('option');
					disabledOption.textContent = label?.textContent ?? '';
					disabledOption.disabled = true;
					disabledOption.selected = true;

					selectElement.insertBefore(disabledOption, selectElement.firstChild);
				}
			}
        }, 2000)
    }, []);

	useEffect(() => {
		setTimeout(() => {
			const submitButton = document.getElementById("_form_28_submit");
			console.log(submitButton);
			if (submitButton) {
				submitButton.addEventListener("click", () => {
					const phoneInput = document.querySelector<HTMLInputElement>("#phone");
					if (phoneInput && !phoneInput.value.startsWith("+55")) {
						phoneInput.value = `+55${phoneInput.value}`;
					}
				});
			}
		}, 2000);
	}, []);

	return (
		<div className="w-full">
			<div id="_forms_28" className="_form_28 w-full" />
		</div>
	);
}
