"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
	const targetDate = new Date("2025-02-02T07:00:00");

	const calculateTimeLeft = () => {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer); 
	}, []);

	const [isMounted, setIsMounted] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsMounted(true);

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			window.location.href =
				"https://devzapp.com.br/api-engennier/campanha/api/redirect/66db3b85dc4be6000187554b";
		}, 10000);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div>
			<div className="text-white flex gap-2">
				<p className="rounded-xl font-bold text-xl w-24 h-20 bg-zinc-100 flex flex-col gap-0 items-center justify-center text-black">
					{timeLeft.days} <span className="text-sm font-semibold">Dias</span>
				</p>
				<p className="rounded-xl font-bold text-xl w-24 h-20 bg-zinc-100 flex flex-col gap-0 items-center justify-center text-black">
					{timeLeft.hours} <span className="text-sm font-semibold">Horas</span>
				</p>
				<p className="rounded-xl font-bold text-xl w-24 h-20 bg-zinc-100 flex flex-col gap-0 items-center justify-center text-black">
					{timeLeft.minutes} <span className="text-sm font-semibold">Min</span>
				</p>
				<p className="rounded-xl font-bold text-xl w-24 h-20 bg-zinc-100 flex flex-col gap-0 items-center justify-center text-black">
					{timeLeft.seconds} <span className="text-sm font-semibold">Seg</span>
				</p>
			</div>
		</div>
	);
}

export default CountdownTimer;
