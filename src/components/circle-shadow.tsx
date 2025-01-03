interface CircleShadowProps {
	className?: string;
}

export function CircleShadow({ className }: CircleShadowProps) {
	return (
		<div className={`absolute ${className} w-40 h-40 bg-primary blur-[124px]`} />
	);
}
