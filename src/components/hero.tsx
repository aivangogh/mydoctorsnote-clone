import Image from "next/image";
import { CallToActionButton } from "./call-to-action";

function Hero() {
	return (
		<section className="relative h-fit">
			<Image
				src="/hero.webp"
				alt="Hero background"
				width={1920}
				height={1080}
				className="w-full h-auto object-cover"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center gap-6 py-10 bg-black/60">
				<div className="flex flex-col items-center w-5/12">
					<h1 className="text-white text-center font-extrabold text-[3.5rem]/16">
						Your Doctor&apos;s Note In 1 Minute, for $29.99!
					</h1>
					<Image
						src="/icons/underline-white.svg"
						alt="Underline"
						width={10}
						height={10}
						className="w-[27rem]"
					/>
				</div>
				<CallToActionButton label="Get your Note Now" />
			</div>
		</section>
	);
}

export { Hero };
