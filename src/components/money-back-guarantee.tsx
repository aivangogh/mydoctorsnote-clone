import Image from "next/image";

function MoneyBackGuarantee() {
	return (
		<section className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 bg-green-200 px-4 py-10 md:p-6 rounded-xl">
			<Image
				src="/icons/risk-free.svg"
				alt="Risk Free"
				width={150}
				height={150}
			/>
			<div className="flex flex-col gap-4 md:w-6/12">
				<h1 className="text-center md:text-left font-bold text-2xl md:text-4xl">
					Money Back Guarantee!
				</h1>
				<span className="text-center md:text-left text-md md:text-lg">
					We will refund 100% of your payment, in case you&apos;re not 100%
					satisfied with our service.
				</span>
			</div>
		</section>
	);
}

export { MoneyBackGuarantee };
