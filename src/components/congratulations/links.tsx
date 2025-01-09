import { LinkItem } from "./link-item";

export function Links() {
	return (
		<div className="flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-6">
			<LinkItem
				icon="/images/whatsapp.png"
				alt="Logo WhatsApp"
				href="https://devzapp.com.br/api-engennier/campanha/api/redirect/66db3b85dc4be6000187554b"
				label="Entrar no grupo"
			/>
		</div>
	);
}
