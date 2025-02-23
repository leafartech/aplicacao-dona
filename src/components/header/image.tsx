import Image from "next/image";

export function ImageComponent() {
	return (
		<div className="absolute bottom-0 right-0 w-full h-[500px] sm:w-[512px] sm:h-[764px] z-50 pointer-events-none">
			<Image
				src="/images/bg-header.png"
				alt="Ted Talks Imagem"
				layout="fill"
				objectFit="contain"
				className="rounded-xl"
			/>
		</div>
	);
}

export function ImageComponent2() {
	return (
		<div className="absolute bottom-0 right-0 w-full h-[464px] sm:w-[756px] sm:h-[764px] z-50 pointer-events-none">
			<Image
				src="/images/bg-header-2.png"
				alt="Ted Talks Imagem"
				layout="fill"
				objectFit="contain"
				className="rounded-xl"
			/>
		</div>
	);
}

