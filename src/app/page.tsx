import { Hero } from "@/components/hero";
import { MoneyBackGuarantee } from "@/components/money-back-guarantee";
import { Services } from "@/components/services";
import { Steps } from "@/components/steps";
import { ContainerLayout } from "@/layouts/container-layout";

export default function Home() {
	return (
		<div>
			<Hero />
			<ContainerLayout className="gap-16">
				<Steps />
				<MoneyBackGuarantee />
				<Services />
			</ContainerLayout>
		</div>
	);
}
