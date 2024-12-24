import type { ReactNode } from "react";

interface InfoItemProps {
	children: ReactNode;
	label: string;
}

export function InfoItem({ children, label }: InfoItemProps) {
	return (
		<div className="bg-zinc-50 shadow-lg rounded-lg p-8 flex items-center space-x-4">
			<div
				className="w-12 h-12 flex items-center justify-center rounded-full"
				style={{
					background:
						"linear-gradient(to bottom right, #db9a1d, #f8ae0a, #d2922b)",
				}}
			>
				{children}
			</div>
			<div className="text-left">
				<p className="text-lg font-semibold text-zinc-800">{label}</p>
			</div>
		</div>
	);
}
