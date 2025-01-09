import Section from "@/components/section";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialGallery() {
	return (
		<Section classNameS="py-20 bg-zinc-50 px-4 text-white bg-zinc-900 overflow-hidden">
			<div className="flex flex-col items-center gap-8 sm:gap-12 text-center">
				<h2 className="text-3xl font-semibold text-center">
					O que <span className="text-primary">nossas alunas</span> estão
					falando
				</h2>
			</div>
            
			<Carousel
				className="flex sm:flex-row flex-col gap-8 justify-center mt-8"
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				opts={{
					align: "center",
					loop: true,
				}}
			>
				<CarouselContent>
					<CarouselItem className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px] aspect-square">
						<Image
							src="/images/print1.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</CarouselItem>
					<CarouselItem className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px] aspect-square">
						<Image
							src="/images/print2.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</CarouselItem>
					<CarouselItem className="relative w-[350px] h-[640px] sm:w-[300px] sm:h-[648px] aspect-square">
						<Image
							src="/images/print3.jpg"
							objectFit="contain"
							alt="Depoimento de aluna"
							layout="fill"
						/>
					</CarouselItem>
				</CarouselContent>
                
				<CarouselPrevious className="hidden sm:flex sm:absolute bg-zinc-50" />
				<CarouselNext className="hidden sm:flex sm:absolute bg-zinc-50" />
			</Carousel>
		</Section>
	);
}
