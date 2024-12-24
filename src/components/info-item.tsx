import type { ReactNode } from "react";

interface InfoItemProps {
	children: ReactNode;
	label: string;
}

export function InfoItem({ children, label }: InfoItemProps) {
	return (
		<div className="flex items-center gap-4 sm:gap-2">
			{children}

			<span className="text-zinc-600 font-medium">{label}</span>
		</div>
	);
}
