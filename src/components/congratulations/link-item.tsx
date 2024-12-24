import Image from "next/image";

type LinkItemProps = {
	icon: string;
	alt: string;
	href: string;
	label: string;
};

export function LinkItem({ icon, alt, href, label }: LinkItemProps) {
	return (
		<div className="flex flex-col items-center gap-3">
				<div className="relative w-[72px] h-[72px]">
					<Image
						src={icon}
						alt={alt}
						layout="fill"
						objectFit="contain"
					/>
				</div>

			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="bg-[#db9a1d] w-48 text-center py-2 font-semibold rounded-xl text-white shadow-md hover:bg-[#c68a1a] focus:ring-2 focus:ring-offset-2 focus:ring-[#c68a1a] transition-all"
			>
				{label}
			</a>
		</div>
	);
}
