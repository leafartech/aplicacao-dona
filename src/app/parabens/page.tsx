import Section from "@/components/section";
import VideoCard from "@/components/video-card";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <main className="bg-zinc-100 min-h-screen w-full">
                <div className="bg-zinc-800 fixed top-0 left-0 w-full z-[9999] flex justify-center items-center py-2">
                    <div className="relative w-[240px] h-[32px]">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo Dona"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <Section className="pt-24 px-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col text-center">
                            <h2 className="text-4xl font-bold">Atenção Dona</h2>
                            <p className="text-xl max-w-2xl">Siga os 3 passos abaixo abaixo para resgatar o seu presente surpresa pós-aplicação 👇</p>
                        </div>
                        <div className="sm:max-w-2xl px-4">
                            <ul className="flex flex-col gap-6 sm:py-12 py-8 sm:px-8 px-6 border border-zinc-600 rounded-xl">
                                <li className="flex flex-col gap-1 ">
                                    <h5 className="text-xl font-semibold">1. Fique atenta ao seu whatsapp:</h5>
                                    <p className="text-zinc-600">A nossa equipe de Matrículas vai conversar com você por lá para confirmar se você tem o encaixe com o perfil de enfermeiras que estamos buscando.</p>
                                </li>
                                <li className="flex flex-col gap-1 ">
                                    <h5 className="text-xl font-semibold">2. Queremos que você sinta segurança total na sua decisão:</h5>
                                    <p className="text-zinc-600">Pode perguntar o que quiser para a nossa equipe sobre como vamos tornar você DONA do seu plantão, caso você tenha você tenha o encaixe com o perfil que buscamos.</p>
                                </li>
                                <li className="flex flex-col gap-1 ">
                                    <h5 className="text-xl font-semibold">3. Por último, confira a caixa de entrada do email que você inseriu na aplicação:</h5>
                                    <p className="text-zinc-600">Te mandamos o presente surpresa por lá. Espero que goste.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-6">
                            <div className="flex flex-col items-center">
                                <div className="relative w-[72px] h-[72px]">
                                    <Image
                                        src="/images/google.webp"
                                        alt="Logo Gmail"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <a
                                    href="https://mail.google.com/mail/u/0/#search/Dona+do+Plantão"
                                    className="bg-[#db9a1d] w-48 text-center py-2 font-semibold rounded-xl"
                                >Acessar Gmail</a>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative w-[72px] h-[72px]">
                                    <Image
                                        src="/images/outlook.png"
                                        alt="Logo Gmail"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <a
                                    href="https://outlook.live.com/mail/0/"
                                    className="bg-[#db9a1d] w-48 text-center py-2 font-semibold rounded-xl"
                                >Acessar Outlook</a>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="py-12 sm:py-24 px-4">
                    <div className="flex flex-col gap-12">
                        <div className="flex items-center flex-col gap-4">
                            <h2 className="font-bold text-xl sm:text-3xl text-center">Conheça a nossa Pós-Graduação por dentro</h2>
                            <div className="pt-4 w-full max-w-3xl">
                                <iframe
                                    id="panda-527e4247-193a-4d1b-8d22-7481982fdb10"
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=bd28656d-7d65-452b-98cf-189fc1a7f3c2&iosFakeFullscreen=true"
                                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                                    allowFullScreen
                                    className="rounded-xl w-full sm:h-96 h-60">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="font-bold text-xl sm:text-3xl text-center max-w-3xl">Pouco tempo atrás, elas também estavam se matriculando nesse mesmo lugar que você tá agora</h2>
                            <div className="flex justify-center gap-8 flex-wrap">
                                <VideoCard
                                    name="Etiana Oliveira"
                                    description="Técnica de enfermagem por 10 anos, hoje é a enfermeira amada pela equipe"
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=9fc3e50d-22ab-4a35-847c-4993f95773dd&iosFakeFullscreen=true"
                                />
                                <VideoCard
                                    name="Paula Marangoni"
                                    description="Já tinha desistido da enfermagem, por não conseguir nenhum emprego, até que…"
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=390322b3-cfe6-409a-af93-c515fef6b027&iosFakeFullscreen=true"
                                />
                                <VideoCard
                                    name="Elionara Fernandes"
                                    description="Liderou uma PCR na época do covid que impressionou até a fisioterapeuta"
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=a9daf0ff-953a-4240-ae37-20329b645cbf&iosFakeFullscreen=true"
                                />
                                <VideoCard
                                    name="Eduarda Rodrigues"
                                    description="Tinha uma técnica bem desafiadora, hoje em dia se dão super bem"
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=b170b06d-ea24-4778-b822-df42147576b6&iosFakeFullscreen=true"
                                />
                                <VideoCard
                                    name="Cristiane Silva"
                                    description={`${`"`}Eu tava perdida na enfermagem, não sabia se queria continuar${`"`}`}
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=4acaa152-0a64-4064-b163-0dc9f79fe76c&iosFakeFullscreen=true"
                                />
                                <VideoCard
                                    name="Gleyce Albuquerque"
                                    description={`${`"`}Eu queria a certeza na tomada de decisão${`"`}`}
                                    src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=e4b46be4-3c53-4549-96fc-8bddf4de9022&iosFakeFullscreen=true"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <footer className="bg-zinc-800 text-center text-white py-4">
                <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
            </footer>
        </>
    )
}