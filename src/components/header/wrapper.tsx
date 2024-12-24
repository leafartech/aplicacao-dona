import type { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 flex flex-col gap-8 px-4">
            {children}
        </div>
    );
}