import { LinkItem } from "./link-item";

export function Links() {
	return (
		<div className="flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-6">
			<LinkItem
				icon="/images/google.webp"
				alt="Logo Gmail"
				href="https://mail.google.com/mail/u/0/#search/Dona+do+Plantão"
				label="Acessar Gmail"
			/>
			<LinkItem
				icon="/images/outlook.png"
				alt="Logo Outlook"
				href="https://outlook.live.com/mail/0/"
				label="Acessar Outlook"
			/>
			<LinkItem
				icon="/images/whatsapp.png"
				alt="Logo WhatsApp"
				href="https://wa.me/"
				label="Acessar WhatsApp"
			/>
		</div>
	);
}
