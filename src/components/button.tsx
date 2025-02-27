"use client"

import { useRouter } from "next/navigation";
import type React from "react";
import { useState, type SetStateAction } from "react";

interface ButtonProps {
	label: string;
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	modal?: boolean
}

export default function Button({ label, open, setOpen, modal }: ButtonProps) {

	const { push } = useRouter()

	function handleRedirect() {
		const params = new URLSearchParams(window.location.search)

		const utm_source = params.get('utm_source')
		const utm_campaign = params.get('utm_campaign')
		const utm_medium = params.get('utm_medium')
		const utm_content = params.get('utm_content')
		const utm_term = params.get('utm_term')

		push(`https://form.respondi.app/qiz1HBoA/?utm_source=${utm_source}&utm_campaign=${utm_campaign}&utm_medium=${utm_medium}&utm_content=${utm_content}&utm_term=${utm_term}`)
	}

	if (!modal)
		return (
			<button
				onClick={() => handleRedirect()}
				className="z-[999] w-full max-w-md text-center bg-gradient-to-br from-primary-light to-primary-dark hover:to-primary hover:from-primary py-2 rounded-md text-white sm:text-xl font-semibold uppercase shadow-2xl shadow-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
			>
				{label}
			</button>
		)

	return (
		<button
			type="button"
			onClick={() => setOpen(!open)}
			className="z-[999] w-full max-w-md bg-gradient-to-br from-primary-light to-primary-dark hover:to-primary hover:from-primary py-2 rounded-md text-white sm:text-xl font-semibold uppercase shadow-2xl shadow-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
		>
			{label}
		</button>
	);
}
