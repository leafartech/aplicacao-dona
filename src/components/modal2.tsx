import type React from "react";
import { type SetStateAction, useEffect } from "react";
import { Form2 } from "./forms2";

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

export function Modal2({
	open,
	setOpen,
	searchParams,
}: {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	searchParams: FormProps[`searchParams`];
}) {
	useEffect(() => {
		if (open) {
			document.querySelector("body")?.classList.add("overflow-hidden");
		} else {
			document.querySelector("body")?.classList.remove("overflow-hidden");
		}
	}, [open]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center ${open ? "z-[99999999] opacity-100" : "-z-50 opacity-0"}`}
		>
			<div
				onClick={() => setOpen(!open)}
				onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
				className={"absolute top-0 left-0 w-full h-full bg-black/60"}
			/>
			<div className="w-full max-w-xl py-6 px-4 sm:p-12 bg-zinc-100 z-50 rounded-xl text-black">
				<h2 className="text-2xl font-semibold mb-4 text-center">
                        Formulário de aplicação
                    </h2>
                    <div>
					<Form2 searchParams={searchParams} />
				</div>
			</div>
		</div>
	);
}
