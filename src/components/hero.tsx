import Image from "next/image";
import { CallToActionButton } from "./call-to-action";

function Hero() {
	return (
		<section className="bg-[url(/hero.webp)] bg-center bg-cover bg-no-repeat md:h-full">
			<div className="flex flex-col items-center justify-center gap-6 py-16 md:py-32 bg-black/60">
				<div className="flex flex-col items-center w-10/12 md:w-5/12">
					<h1 className="text-white text-center font-extrabold text-2xl md:text-5xl/16">
						Your Doctor&apos;s Note In <span className="truncate">1 Minute</span>, for $29.99!
					</h1>
					<Image
						src="/icons/underline-white.svg"
						alt="Underline"
						width={10}
						height={10}
						className="w-[200px] md:w-[27rem]"
					/>
				</div>
				<CallToActionButton label="Get your Note Now" />
			</div>
		</section>
	);
}

export { Hero };
