import { Header } from "@/components/header";
import { Offer } from "@/components/offer";

export function WrapperLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex flex-col">
				<Offer discount={0.3} className="sticky top-0 z-100" />
				<Header className="sticky z-99" />
				{children}
			</div>
		</>
	);
}
