import type { ReactNode } from "react";

interface TitleProps {
	children: ReactNode;
}

export function Title({ children }: TitleProps) {
	return <h1 className="text-2xl sm:text-4xl font-semibold">{children}</h1>;
}
