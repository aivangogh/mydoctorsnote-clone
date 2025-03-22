import { cn } from "@/lib/utils";
import Image from "next/image";
import { CallToActionButton } from "./call-to-action";
import { Card, CardContent, CardHeader } from "./ui/card";

function Services() {
	return (
		<section className="flex flex-col items-center gap-6">
			<div className="flex flex-col items-center gap-4 md:w-6/12">
				<div className="flex flex-col items-center gap-1">
					<h1 className="inline-block gap-1.5 items-baseline text-center font-semibold text-3xl md:text-[2.8rem]/12">
						Get Peace of Mind With
						<span className="text-primary"> My Doctors Note</span>
					</h1>
					<Image
						src="/icons/underline-black.svg"
						alt="Underline"
						width={10}
						height={10}
						className="w-fit"
					/>
				</div>
				<span className="text-md md:text-lg leading-6 text-gray-500">
          {`My Doctor's Note provides a fast, hassle-free solution for
					obtaining excuse notes. Focus on your recovery while we take care of
					the paperwork, delivering your note in minutes.`}
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
				<Card>
					<CardHeader label="Trusted by Thousands Across the USA" />
					<CardContent>
						<ul className="flex flex-col gap-4 list-outside">
							<CardListItem
								title="Professional & Reliable"
								description="Includes key medical absence details in a format widely recognized by workplaces."
							/>
							<CardListItem
								title="Essential Information Included"
								description="Clearly structured while protecting your privacy."
							/>
							<CardListItem
								title="Instant & Hassle-Free"
								description="No appointments, no waiting. Receive your document within seconds via email."
							/>
						</ul>
					</CardContent>
					<div className="flex flex-row items-center justify-between">
						<Image
							src="/brands/walmart.svg"
							alt="Walmart"
							width={125}
							height={100}
							className="w-[80px] md:w-[125px] h-auto"
						/>
						<Image
							src="/brands/fedex.svg"
							alt="FedEx"
							width={125}
							height={100}
							className="w-[80px] md:w-[125px] h-auto"
						/>
						<Image
							src="/brands/starbucks.webp"
							alt="Startbucks"
							width={125}
							height={100}
							className="w-[80px] md:w-[125px] h-auto"
						/>
					</div>
				</Card>
				<Card>
					<CardHeader label="Get Your Note In Under 1 Minute" />
					<CardContent>
						<ul className="flex flex-col gap-4 list-outside">
							<CardListItem
								title="Skip the Wait"
								description="No appointments, no delays. Get what you need instantly, anytime."
							/>
							<CardListItem
								title="Instant Email Delivery"
								description="No appointments, no delays. Get what you need instantly, anytime."
							/>
							<CardListItem
								title="Instant Email Delivery"
								description="Receive your note directly in your inbox, ready to use."
							/>
						</ul>
					</CardContent>
				</Card>
				<Card>
					<CardHeader label="Customer Support That Puts You First" />
					<CardContent>
						<ul className="flex flex-col gap-4 list-outside">
							<CardListItem
								title="Adjustable to Your Needs"
								description="Easily modify details to match your situation."
							/>
							<CardListItem
								title="Always Here for You "
								description="Get assistance whenever you need it, day or night."
							/>
							<CardListItem
								title="Real People, Real Support"
								description="Our team is here to help, every step of the way."
							/>
						</ul>
					</CardContent>
					<div className="grid grid-cols-2 items-center gap-8 md:gap-2">
						<Image src="/avatars.png" alt="Avatars" width={250} height={100} />
						<span className="text-green-400 text-sm md:text-xl font-bold">
              {`We're ready to help!`}
						</span>
					</div>
				</Card>
				<Card>
					<CardHeader
						label="The Best Price In The Market"
						className="text-center"
					/>
					<CardContent className="flex flex-col items-center justify-center gap-8">
						<span className="text-gray-500 text-xl md:text-3xl font-semibold line-through">
							$42.99
						</span>
						<span className="text-black text-5xl md:text-6xl font-bold">
							$29.99
						</span>
					</CardContent>
					<span className="text-center text-green-400 text-lg md:text-2xl font-bold">
						30% Discount - Limited Time!
					</span>
				</Card>
			</div>
			<CallToActionButton
				label="Get your Doctors Note Now"
				descriptionProps={{ className: "text-gray-500" }}
			/>
		</section>
	);
}

type CardListItemProps = {
	title: string;
	description: string;
	className?: string;
};
function CardListItem({ title, description, className }: CardListItemProps) {
	return (
		<>
			<li className={cn(className)}>
				<span className="inline-block text-gray-500 text-sm md:text-md">
					<span className="font-bold">• {title} -</span>
					<span>{description}</span>
				</span>
			</li>
		</>
	);
}

export { Services };
