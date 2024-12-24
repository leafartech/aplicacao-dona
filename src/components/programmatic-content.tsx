import { Calendar } from "./icons/calendar";
import { Diploma } from "./icons/diploma";
import { Watch } from "./icons/watch";
import { InfoItem } from "./info-item";

import React from 'react';


export function ProgrammaticaContent() {
	return (
		<div className="flex flex-col items-center sm:items-center p-4 sm:p-8 w-full">
			<h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
				Conteúdo <span className="text-primary">Programático</span>     
			</h2>
            
			<div className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:items-center">
				<InfoItem label="Carga horária: 360 horas">
					<Watch />
				</InfoItem>

				<InfoItem label="Reconhecido pelo MEC">
					<Diploma />
				</InfoItem>
				<InfoItem label="Duração: 12 meses">
					<Calendar />
				</InfoItem>
			</div>
		</div>
	);
}
