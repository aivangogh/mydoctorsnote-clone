import { CallToActionButton } from "@/components/call-to-action";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export default function Contact() {
	return (
		<div className="w-full flex flex-col items-center gap-10">
			<h1 className="text-4xl md:text-5xl leading-10">FAQ</h1>
			<div className="md:w-[45rem]">
				<Accordion>
					<AccordionItem
						title={`Will my employer accept this doctor’s note?`}
						defaultOpen
					>
						<span>
							Yes! Our notes are formatted in a widely recognized style and
							include all key details employers typically require. Thousands of
							people across the U.S. have successfully used our service without
							issues. If you ever need adjustments, we’re here to ensure you
							have exactly what you need—your satisfaction is our top priority.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title="What if I need changes to my note?">
						<span>
							No problem! If you need modifications, simply reach out, and we’ll
							make any necessary adjustments. We’re committed to ensuring you
							have a document that meets your needs.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title="What if my employer has questions about the note?">
						<span>
							Our notes are designed to be clear and straightforward, minimizing
							the chance of any questions. However, if your employer does
							request additional details, we’re here to help you navigate the
							situation.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`How fast will I receive my doctor’s note?`}>
						<span>
							Immediately. Once you complete your order, your note is generated
							and delivered straight to your email within minutes.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`What is a doctor’s note?`}>
						<span>
							A doctor’s note is an document that explains your need for time
							off from work or school due to a medical reason. It includes
							essential absence details, such as the date of examination,
							recommended rest period, and return-to-work date, all while
							maintaining your privacy.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`When is a doctor’s note required?`}>
						<span>
							A doctor’s note may be required in various situations, including:
							<ul className="list-disc list-inside">
								<li>
									<span className="font-bold">Work Absences</span> - Many
									employers require documentation for medical leave.
								</li>
								<li>
									<span className="font-bold">School or University Leave</span>{" "}
									- Some institutions mandate a note for missed classes.
								</li>
								<li>
									<span className="font-bold">Extended Sick Leave</span> - If
									you’re absent for multiple days, an official document may be
									necessary.
								</li>
								<li>
									<span className="font-bold">Medical Accommodations</span> -
									Employers may need documentation for modified work duties.
								</li>
								<li>
									<span className="font-bold">
										Proof of Illness for Travel or Events
									</span>{" "}
									- Some airlines and event organizers request documentation for
									rescheduling or refunds.
								</li>
							</ul>
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title="How secure is my information?">
						<span>
							Your privacy is our top priority. We follow strict confidentiality
							standards, and your information is never shared with third
							parties.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`Can I get a doctor’s note online?`}>
						<span>
							Yes! Our service allows you to obtain a fully formatted note
							without the hassle of an in-person visit. No waiting rooms, no
							appointments—just a fast, convenient solution delivered straight
							to your inbox.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`How much does a doctor’s note cost?`}>
						<span>
							We offer a transparent, flat rate of $29.99 with{" "}
							<span className="font-bold">no hidden fees</span>. Unlike
							traditional doctor visits, which can cost hundreds of dollars, our
							service provides a simple and affordable alternative.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem
						title={`Can I pay for a doctor’s note with insurance?`}
					>
						<span>
							Our service is out-of-pocket to ensure a fast and seamless
							experience. We’ve chosen a direct payment model to eliminate
							delays and provide instant documentation—at a cost lower than most
							copays.
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`What conditions qualify for a doctor’s note?`}>
						<span>
							Our notes can be used for a variety of common conditions that may
							require time off, including:
							<ul className="list-disc list-inside">
								<li>Flu, colds, and respiratory illnesses</li>
								<li>Stomach viruses or food poisoning</li>
								<li>Migraines and severe headaches</li>
								<li>Stress-related conditions</li>
								<li>Mild injuries requiring rest</li>
								<li>And more</li>
							</ul>
						</span>
					</AccordionItem>
				</Accordion>
				<Accordion>
					<AccordionItem title={`What if I don’t receive my email?`}>
						<span>
							Check your spam or promotions folder just in case. If you still
							don’t see it, contact us, and we’ll make sure you receive it right
							away.
						</span>
					</AccordionItem>
				</Accordion>

				<Accordion>
					<AccordionItem title="What if I have an urgent issue with my order?">
						<span>
							We’re here to help! Our support team is available 24/7, ensuring
							that you always have assistance when you need it.
						</span>
					</AccordionItem>
				</Accordion>
			</div>
			<CallToActionButton
				label="Get your Doctors Note Now"
				descriptionProps={{ className: "text-gray-500" }}
			/>
		</div>
  );
}
