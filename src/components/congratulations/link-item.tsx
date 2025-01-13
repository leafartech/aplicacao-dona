import Image from "next/image";

type LinkItemProps = {
	icon: string;
	alt: string;
	href: string;
	label: string;
};

export function LinkItem({ icon, alt, href, label }: LinkItemProps) {
	return (
		<div className="flex flex-col items-center gap-3 w-full">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="bg-[#4fcb5c] shadow-md w-full max-w-sm flex items-center justify-center gap-2 px-8 text-center py-2 font-semibold rounded-xl text-lg sm:text-xl text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#c68a1a] transition-all"
			>
				<div className="relative w-[26px] h-[26px]">
					<Image
						src={icon}
						alt={alt}
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<span>{label}</span>
			</a>
		</div>
	);
}
