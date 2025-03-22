export default function Contact() {
	return (
		<div className="flex flex-col gap-10">
			<h1 className=" text-3xl md:text-5xl leading-10">Contract Us</h1>

			<div className="flex flex-col gap-6 text-gray-600 text-sm">
				<p>
					We are available to answer any questions or concerns you may have.
				</p>
				<div className="flex flex-col gap-2">
					<span className="font-bold">Customer Support</span>
					<span>Mon-Fri, 9am-6pm EST</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="font-bold">Email:</span>
					<span>support@medexcuse.com</span>
				</div>
				<span className="font-bold">Company details</span>
        <span className="font-bold">COMPANY NAME & ADDRESS</span>
				<div className="flex flex-col gap-2">
					<span className="font-bold">Company registration number:</span>
					<span>76987496</span>
				</div>
			</div>
		</div>
	);
}
