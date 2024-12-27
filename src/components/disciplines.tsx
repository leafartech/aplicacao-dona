import { disciplines } from "@/constants/disciplines";
import Dropdown from "./dropdown";

export function Disciplines() {
	return (
		<div className="flex flex-col gap-4">
			{disciplines.map((discipline, index) => (
				<div
					key={`discipline-${index + 1}`}
					className="border-b border-gray-200 last:border-none"
				>
					<Dropdown data={discipline} />
				</div>
			))}
		</div>
	);
}
