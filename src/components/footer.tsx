"use client";

import { ContainerLayout } from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";
import { FadeInFromBottomSection } from "./animations/fade-in-from-bottom-section";

function Footer() {
	return (
		<>
			<hr className="border-gray-200" />
			<ContainerLayout>
				<footer className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-2 px-4 text-gray-800">
					<FadeInFromBottomSection className="flex flex-col gap-6 text-sm">
						<Image
							src="/icons/brand-name.webp"
							alt="logo"
							width={200}
							height={100}
							className="w-[175px] md:w-[200px] h-auto"
						/>
						<div className="flex flex-row gap-2">
							<span className="font-bold">Support</span>
							<span>(Mon-Fri, 9am-6pm EST)</span>
						</div>
						<div className="flex flex-row gap-2">
							<span className="font-bold">Email:</span>
							<span>help@urgentsupport.co</span>
						</div>
					</FadeInFromBottomSection>
					<FadeInFromBottomSection delay={0.1} className="flex flex-col gap-8">
						<span className="font-medium">Customer service</span>
						<div className="flex flex-col gap-4 text-xs text-gray-600">
							<Link className="hover:underline" href="/pages/contact">
								Contract Us
							</Link>
							<Link className="hover:underline" href="help@urgentsupport.co">
								Refund Requests
							</Link>
							<Link
								className="hover:underline"
								href="/pages/frequently-asked-questions"
							>
								Frequently Asked Questions
							</Link>
						</div>
					</FadeInFromBottomSection>
					<FadeInFromBottomSection delay={0.2} className="flex flex-col gap-8">
						<span className="font-medium">Policies</span>
						<div className="flex flex-col gap-4 text-xs text-gray-600">
							<Link className="hover:underline" href="/pages/terms-of-service">
								Terms Of Service
							</Link>
							<Link className="hover:underline" href="/pages/refund-policy">
								Refund Policy
							</Link>
							<Link className="hover:underline" href="/pages/privacy-policy">
								Privacy Policy
							</Link>
							<Link className="hover:underline" href="/pages/disclaimer-policy">
								Disclaimer Policy
							</Link>
							<Link
								className="hover:underline"
								href="/pages/intellectual-property-policy"
							>
								Intellectual Property Policy
							</Link>
							<Link
								className="hover:underline"
								href="/pages/jurisdiction-policy"
							>
								Jurisdiction Policy
							</Link>
							<Link
								className="hover:underline"
								href="/pages/limitation-of-liability-policy"
							>
								Limitation of Liability Policy
							</Link>
							<Link
								className="hover:underline"
								href="/pages/indemnification-policy"
							>
								Indemnification Policy
							</Link>
						</div>
					</FadeInFromBottomSection>
					<FadeInFromBottomSection delay={0.3}>
						<div className="flex flex-col gap-8">
							<span className="font-medium">Company Details</span>
							<span className="text-sm text-gray-600">
								COMPANY NAME & ADDRESS
							</span>
							<span className="text-sm text-gray-600">
								Company registration number: 000000
							</span>
						</div>
					</FadeInFromBottomSection>
				</footer>
			</ContainerLayout>
			<hr className="border-gray-200" />
			<ContainerLayout>
				<FadeInFromBottomSection delay={0.4} className="flex items-center justify-center">
					<span className="text-[10px] text-gray-600">
						© 2025, My Doctors Note
					</span>
				</FadeInFromBottomSection>
			</ContainerLayout>
		</>
	);
}

export { Footer };
