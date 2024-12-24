"use client";

import Section from "@/components/section";
import Image from "next/image";

export function PostGraduate() {
    return (
        <Section classNameS="py-16 sm:py-24 bg-zinc-50 px-4 text-black">
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center">
            <div className="relative sm:w-[512px] sm:h-[394px]">
                <Image
                    src="/images/group.png"
                    alt="Ted Talks Imagem"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-xl"
                />
            </div>

            <div className="sm:max-w-xl flex flex-col gap-4 sm:gap-8">
                <h2 className="text-3xl font-semibold">
                    Por que nossa <span className="text-primary">Pós é única?</span>
                </h2>
                <div className="flex flex-col gap-4 text-lg">
                    <p>
                        Diferentemente das outras Pós-Graduações do mercado que são
                        muita teoria e pouca prática…
                    </p>
                    <p>
                        Aqui,{" "}
                        <strong>você aprende de fato com quem dá plantões</strong>.
                    </p>
                    <p>
                        Todo o{" "}
                        <strong>
                            nosso conteúdo é validado por mais de{" "}
                            <span className="text-primary">150 mil horas</span>
                        </strong>{" "}
                        de plantões dos nossos professores e facilitadores.
                    </p>
                    <p>
                        Toda essa experiência prática nos{" "}
                        <strong className="text-primary">
                            permite ensinar a você o que realmente dá segurança
                        </strong>{" "}
                        nos plantões
                    </p>
                    <p>
                        Além disso, nosso conteúdo também é comprovado por mais de{" "}
                        <strong>
                            centenas de alunas enfermeiras DONAs do Plantão
                        </strong>{" "}
                        que estão atuando com postura e segurança em todo o Brasil.
                    </p>
                </div>
            </div>
        </div>
    </Section>
    )
}