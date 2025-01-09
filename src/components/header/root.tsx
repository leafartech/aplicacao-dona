import type { ReactNode } from "react";

interface RootProps {
	children: ReactNode;
}

export function Root({ children }: RootProps) {
	return (
		<header className="relative w-full sm:h-screen h-[1160px] flex sm:items-center sm:justify-center items-start sm:pt-0 pt-12  bg-gradient-to-br from-zinc-950 via-zinc-900 to-primary-dark">
			{children}
		</header>
	);
}
