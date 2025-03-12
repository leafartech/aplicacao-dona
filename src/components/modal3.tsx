import type React from "react";
import { type SetStateAction, useEffect } from "react";
import { Form3 } from "./forms3";

export function Modal3({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
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
			<div className="relative w-full max-w-xl py-6 px-4 sm:p-12 bg-zinc-100 z-50 rounded-xl text-black overflow-hidden">
				<div className="mb-4 text-center">
					<h2 className="text-2xl font-semibold text-center">
						Formulário de aplicação
					</h2>
					<p className="text-zinc-500 text-sm">Preencha as perguntas corretamente abaixo para aplicar</p>
				</div>
				<div>
					<Form3 />
				</div>
			</div>
		</div>
	);
}
