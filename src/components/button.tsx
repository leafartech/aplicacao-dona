import type React from "react";
import type { SetStateAction } from "react";

export default function Button({
	label,
	open,
	setOpen,
}: {
	label: string;
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
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
