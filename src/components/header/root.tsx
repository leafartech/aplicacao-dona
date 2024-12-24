import type { ReactNode } from "react";

interface RootProps {
	children: ReactNode;
}

export function Root({ children }: RootProps) {
	return (
		<header className="relative w-full sm:h-screen h-[1080px] bg-zinc-900 flex sm:items-center sm:justify-center items-start sm:pt-0 pt-12">
			{children}
		</header>
	);
}
