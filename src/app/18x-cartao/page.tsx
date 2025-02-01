"use client"

import { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi2";

const getTimeUntilTarget = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 1, 3, 6, 30, 0); // 3 de fevereiro às 6:30 AM

    // const targetDate = new Date(); // 🔹 Define o target como 1 hora atrás

    // Se a data alvo já passou neste ano, define para o próximo ano
    if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }

    const diff = targetDate.getTime() - now.getTime();

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

export default function Page() {

    const [timeLeft, setTimeLeft] = useState(getTimeUntilTarget());

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = getTimeUntilTarget();
            setTimeLeft(newTimeLeft);

            // Se o tempo acabar, redireciona
            if (
                newTimeLeft.days === 0 &&
                newTimeLeft.hours === 0 &&
                newTimeLeft.minutes === 0 &&
                newTimeLeft.seconds === 0
            ) {
                clearInterval(interval); // Stop timer
                window.location.href = 'https://bit.ly/pos-listavip-18x'; // https://bit.ly/pos-listavip-18x
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen radial-01 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl border flex items-center justify-center px-8 py-16">
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-center flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center rounded-full bg-[#e49e00]/10 p-5">
                            <HiOutlineClock className="h-10 w-10 text-[#e49e00]" strokeWidth={2} />
                        </div>
                        <h2 className="text-3xl font-semibold">Inscrições abertas em:</h2>
                    </div>
                    <div className="w-full flex items-center sm:flex-row flex-col gap-4">
                        <div className="py-2 w-full sm:w-32 border rounded-sm flex flex-col items-center">
                            <p className="text-4xl font-bold text-[#e49e00]">0{timeLeft.days}</p>
                            <p className="opacity-60">Dias</p>
                        </div>
                        <div className="py-2 w-full sm:w-32 border rounded-sm flex flex-col items-center">
                            <p className="text-4xl font-bold text-[#e49e00]">{timeLeft.hours}</p>
                            <p className="opacity-60">Horas</p>
                        </div>
                        <div className="py-2 w-full sm:w-32 border rounded-sm flex flex-col items-center">
                            <p className="text-4xl font-bold text-[#e49e00]">{timeLeft.minutes}</p>
                            <p className="opacity-60">Minutos</p>
                        </div>
                        <div className="py-2 w-full sm:w-32 border rounded-sm flex flex-col items-center">
                            <p className="text-4xl font-bold text-[#e49e00]">{timeLeft.seconds}</p>
                            <p className="opacity-60">Segundos</p>
                        </div>
                    </div>
                    <p className="text-zinc-700 max-w-md text-center">Quando esse cronômetro chegar a zero, você será redirecionado à página de pagamento...</p>
                </div>
            </div>
        </div>
    )
}