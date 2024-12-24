import Section from "@/components/section";
import Image from "next/image";

export function TestimonialGallery() {
	return (
		<Section classNameS="py-0 bg-zinc-50 px-4 text-black">
			<div className="flex flex-col items-center gap-8 sm:gap-12 text-center">
				<h2 className="text-3xl font-semibold text-center">
					O que nossas aulas estão falando?
				</h2>
				<div className="flex sm:flex-row flex-col gap-8 justify-center">
					<div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
						<Image
							src="/images/print1.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</div>
					<div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
						<Image
							src="/images/print2.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</div>
					<div className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px]">
						<Image
							src="/images/print3.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}
