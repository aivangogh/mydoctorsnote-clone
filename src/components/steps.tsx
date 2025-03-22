import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { CallToActionButton } from "./call-to-action";
import { FadeInSection } from "./animations/fade-in-section";

function Steps() {
	return (
		<section className="flex flex-col items-center gap-6">
			<FadeInSection className="flex flex-col gap-4 md:w-7/12">
				<h1 className="font-sans text-center font-medium text-4xl md:text-[2.8rem]/12">
          {`Get An Online Doctor's Note In 3 Easy Steps`}
				</h1>
				<span className="text-md md:text-lg text-gray-500">
					With our online platform we make it quick and simple for you to obtain
					a doctors note, so you can focus on rest and recovery.
				</span>
			</FadeInSection>
			<FadeInSection delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card
					imageProps={{
						src: "/images/person1.webp",
						alt: "Person 1",
						width: 225,
						height: 225,
					}}
					headerProps={{ label: "Fill In The Smart Form" }}
					descriptionProps={{
						description:
							`Indicate your illness and the desired duration. It's quick and intuitive.`,
					}}
				/>
				<Card
					imageProps={{
						src: "/images/person2.webp",
						alt: "Person 2",
						width: 225,
						height: 225,
					}}
					headerProps={{ label: "Receive Your PDF In 1 Minute" }}
					descriptionProps={{
						description:
							`After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.`,
					}}
				/>
				<Card
					imageProps={{
						src: "/images/person3.webp",
						alt: "Person 3",
						width: 225,
						height: 225,
					}}
					headerProps={{ label: "100% Satisfaction Guarantee", className: "font-extrabold" }}
					descriptionProps={{
						description:
							"Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!",
					}}
				/>
			</FadeInSection>
      <CallToActionButton label="Get your Note Now" descriptionProps={{ className: "text-gray-500"}}/>
		</section>
	);
}

type CardProps = {
	className?: string;
	imageProps: ImageProps;
	headerProps: {
		label: string;
		className?: string;
	};
	descriptionProps: {
		description: string;
		className?: string;
	};
};

function Card({
	className,
	imageProps,
	headerProps,
	descriptionProps,
}: CardProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-4 bg-blue-100 px-6 pt-6 pb-10 rounded-lg",
				className,
			)}
		>
			<div className="flex justify-center">
				<Image {...imageProps} />
			</div>
			<div className="flex flex-col gap-4">
				<div className="text-center">
					<h1 className={cn("font-bold text-2xl", headerProps.className)}>
						{headerProps.label}
					</h1>
				</div>
				<div>
					<span
						className={cn(
							"text-sm leading-[1] text-gray-500",
							descriptionProps.className,
						)}
					>
						{descriptionProps.description}
					</span>
				</div>
			</div>
		</div>
	);
}

export { Steps };
