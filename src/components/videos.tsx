import VideoCard from "./video-card";

export function Videos() {
	return (
		<div className="flex flex-wrap gap-12">
			<VideoCard
				colors={true}
				name="Etiana Oliveira"
				description="Técnica de enfermagem por 10 anos, hoje é a enfermeira amada pela equipe"
				src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=9fc3e50d-22ab-4a35-847c-4993f95773dd&iosFakeFullscreen=true"
			/>
			<VideoCard
				colors={true}
				name="Paula Marangoni"
				description="Já tinha desistido da enfermagem, por não conseguir nenhum emprego, até que…"
				src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=390322b3-cfe6-409a-af93-c515fef6b027&iosFakeFullscreen=true"
			/>
			<VideoCard
				colors={true}
				name="Elionara Fernandes"
				description="Liderou uma PCR na época do covid que impressionou até a fisioterapeuta"
				src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=a9daf0ff-953a-4240-ae37-20329b645cbf&iosFakeFullscreen=true"
			/>
		</div>
	);
}
