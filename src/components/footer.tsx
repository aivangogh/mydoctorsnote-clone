import { ContainerLayout } from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<>
			<hr className="border-gray-200" />
			<ContainerLayout>
				<footer className="grid grid-cols-1 md:grid-cols-4 gap-2 px-4 text-gray-800">
					<div className="flex flex-col gap-4">
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
					</div>
					<div className="flex flex-col gap-8">
						<span className="font-medium">Customer service</span>
						<div className="flex flex-col gap-4 text-sm font-light">
							<Link className="hover:underline" href="/pages/contact">Contract Us</Link>
							<Link className="hover:underline" href="help@urgentsupport.co">Refund Requests</Link>
							<Link className="hover:underline" href="/pages/frequently-asked-questions">
								Frequently Asked Questions
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<span className="font-medium">Policies</span>
						<div className="flex flex-col gap-4 text-sm font-light">
							<Link className="hover:underline" href="/pages/terms-of-services">Terms Of Service</Link>
							<Link className="hover:underline" href="/pages/refund-policy">Refund Policy</Link>
							<Link className="hover:underline" href="/pages/privacy-policy">Privacy Policy</Link>
							<Link className="hover:underline" href="/pages/disclaimer-policy">Disclaimer Policy</Link>
							<Link className="hover:underline" href="/pages/intellectual-property-policy">
								Intellectual Property Policy
							</Link>
							<Link className="hover:underline" href="/pages/jurisdiction-policy">Jurisdiction Policy</Link>
							<Link className="hover:underline" href="/pages/limitation-of-liability-policy">
								Limitation of Liability Policy
							</Link>
							<Link className="hover:underline" href="/pages/indemnification-policy">
								Indemnification Policy
							</Link>
						</div>
					</div>
						<div className="flex flex-col gap-8">
						<span className="font-medium">Company Details</span>
						<span className="">COMPANY NAME & ADDRESS</span>
						<span className="">Company registration number: 000000</span>
					</div>
				</footer>
			</ContainerLayout>
			<hr className="border-gray-200" />
			<ContainerLayout>
				<div className="flex items-center justify-center">
					<span className="text-xs text-gray-500">© 2025, My Doctors Note</span>
				</div>
			</ContainerLayout>
		</>
	);
}

export { Footer };
