import { disciplines } from "@/constants/disciplines";
import { Fragment } from "react";
import Dropdown from "./dropdown";

export function Disciplines() {
	return (
		<div className="flex flex-col gap-2">
			{disciplines.map((discipline, index: number) => (
				<Fragment key={`discipline-${index + 1}`}>
					<Dropdown data={discipline} key={`discipline-${index + 1}`} />
					{index + 1 !== disciplines.length && <hr />}
				</Fragment>
			))}
		</div>
	);
}
