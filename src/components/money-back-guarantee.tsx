import Image from "next/image";

function MoneyBackGuarantee() {
	return (
		<section className="flex flex-row items-center justify-center gap-8 bg-green-200 p-6 rounded-xl">
			<div>
				<Image
					src="/icons/risk-free.svg"
					alt="Risk Free"
					width={150}
					height={150}
				/>
			</div>
			<div className="flex flex-col gap-4 w-6/12">
				<h1 className="font-bold text-4xl">Money Back Guarantee!</h1>
				<div>
					<span className="text-lg">
						We will refund 100% of your payment, in case you&apos;re not 100%
						satisfied with our service.
					</span>
				</div>
			</div>
		</section>
	);
}

export { MoneyBackGuarantee };
