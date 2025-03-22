export default function RefundPolicy() {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="text-3xl md:text-5xl leading-10">Refund Policy</h1>

			<div className="flex flex-col gap-6 text-gray-600 text-sm">
				<div className="flex flex-col gap-4">
					<span className="font-bold">Last Updated: February 4, 2025</span>
					<span className="font-regular leading-7">
						<span className="font-bold">IMPORTANT NOTICE:</span> BY UTILIZING
						THE SERVICES PROVIDED THROUGH MED EXCUSE, YOU UNEQUIVOCALLY
						ACKNOWLEDGE AND CONSENT TO THE REFUND CONDITIONS STIPULATED HEREIN.
						FAILURE TO COMPLY WITH THESE TERMS SHALL RESULT IN THE IMMEDIATE
						FORFEITURE OF ANY CLAIM TO REIMBURSEMENT OR COMPENSATION.
					</span>
				</div>
				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						1. GENERAL POLICY STATEMENT
					</span>
					<span className="font-regular leading-7">
						<span className="font-bold">COMPANY NAME</span>
						{`(hereinafter referred to as "Company," "We," "Us," "Our") exclusively facilitates the automated generation of user-supplied template documents via the domain MedExcuse.com (hereinafter referred to as "Website"). As our services pertain strictly to the provision of non-certified, non-verified, and purely informational template documentation, all transactions are deemed final and binding, subject to the limited exceptions outlined below.`}
					</span>
				</div>
				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						2. REFUND ELIGIBILITY CRITERIA
					</span>
					<span className="flex flex-col gap-6 font-regular leading-7">
						<span>
							A refund request shall be considered under the following expressly
							limited circumstances:
						</span>
						<ul className="list-disc list-inside ml-4 flex flex-col gap-4">
							<li>
								<span className="font-bold">Dissatisfaction with Service:</span>{" "}
								Users who are not satisfied with the generated template document
								may submit a written request for refund assessment, provided
								that the claim is made within{" "}
								<span className="font-bold">seven (7) calendar days</span> from
								the date of purchase.
							</li>
							<li>
								<span className="font-bold">Technical Deficiency:</span> If the
								document delivered materially deviates from the specifications
								provided at the time of order, the user must notify support
								within{" "}
								<span className="font-bold">three (3) calendar days</span> of
								receipt for a remedial correction or refund evaluation.
							</li>
							<li>
								<span className="font-bold">Duplicate Transactions:</span> In
								cases of accidental duplicate purchases of the same document, a
								refund may be granted upon verification of redundant
								transactions within our payment system.
							</li>

							<li>
								<span className="font-bold">Failure to Receive Document:</span>{" "}
								If a user has not received the purchased template within{" "}
								<span className="font-bold">twenty-four (24) hours</span>,
								despite correctly inputting an email address, they must contact
								support for reissuance or refund eligibility determination.
							</li>
						</ul>
						<span>
							Refund requests not falling within these enumerated conditions
							shall be automatically denied.
						</span>
					</span>
				</div>
				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						3. NON-REFUNDABLE CIRCUMSTANCES
					</span>
					<span className="flex flex-col gap-6 font-regular leading-7">
						<span>
							Under no circumstances shall refunds be issued for the following:
						</span>
						<ul className="list-disc list-inside ml-4 flex flex-col gap-4">
							<li>
								<span className="font-bold">
									User Misuse or Misrepresentation:
								</span>{" "}
								If the user attempts to utilize the template document for any
								fraudulent, deceptive, or otherwise improper purpose, as
								explicitly prohibited in the Terms of Service.
							</li>
							<li>
								<span className="font-bold">
									Failure to Obtain Third-Party Acceptance:
								</span>{" "}
								The Company does not guarantee or warrant the acceptance,
								validity, or recognition of its documents by any employer,
								institution, medical practitioner, governmental entity,
								insurance provider, or legal authority.
							</li>
							<li>
								<span className="font-bold">Change of Mind:</span> Refunds shall
								not be granted for users who no longer wish to use the document
								after purchase, absent a qualifying deficiency as stipulated in
								Section 2.
							</li>
							<li>
								<span className="font-bold">Incorrect Data Input by User:</span>{" "}
								The Company is not responsible for erroneous data inputted by
								the user at the time of form submission, and refunds shall not
								be granted for inaccuracies arising from user errors.
							</li>
							<li>
								<span className="font-bold">
									Beyond the Refund Request Period:
								</span>{" "}
								No refund requests shall be entertained beyond the prescribed
								refund eligibility periods.
							</li>
						</ul>
						<span>
							Any contravention of the foregoing stipulations shall be deemed a
							substantial and material breach of these Terms of Service and may
							precipitate immediate service termination, notification of
							pertinent legal authorities, and potential civil or criminal
							prosecution.
						</span>
					</span>
				</div>
				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						4. REFUND REQUEST PROCEDURE
					</span>
					<span className="flex flex-col gap-6 font-regular leading-7">
						<span>
							To initiate a refund request, users must adhere to the following
							procedural steps:
						</span>
						<ul className="list-decimal list-inside ml-4 flex flex-col gap-4">
							<li>
								<span className="font-bold">Submit a Formal Request:</span> All
								refund claims must be submitted via email to{" "}
								<span className="font-bold">support@medexcuse.com</span>{`, with
								the subject line "Refund Request - Order #[Your Order Number]."`}`
							</li>
							<li>
								<span className="font-bold">Provide Justification:</span> The
								request must contain a detailed explanation of the refund basis,
								including screenshots or supporting evidence if applicable.
							</li>
							<li>
								<span className="font-bold">Verification & Processing:</span>{" "}
								Our support team shall review the claim within{" "}
								<span className="font-bold">five (5) business days</span> and
								render a determination regarding refund eligibility.
							</li>
							<li>
								<span className="font-bold">Approved Refund Disbursement:</span>{" "}
								If approved, the refund shall be issued via the original payment
								method within{" "}
								<span className="font-bold">ten (10) business days</span>,
								subject to processing timelines imposed by financial
								institutions.
							</li>
						</ul>
						<span>
							Failure to comply with the aforementioned procedure may result in
							automatic denial of refund claims.
						</span>
					</span>
				</div>
				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						5. MODIFICATIONS TO REFUND POLICY
					</span>
					<span className="leading-7">
						We reserve the unilateral right to modify, amend, or rescind this
						Refund Policy at any time without prior notice. Any changes shall be
						immediately effective upon publication on the Website. Users are
						responsible for regularly reviewing this policy to ensure continued
						compliance.
					</span>
				</div>

				<hr className="border-gray-200 my-10" />
				<div className="flex flex-col gap-4">
					<span className="font-bold text-black text-[16px]">
						6. CONTACT INFORMATION
					</span>

					<span className="flex flex-col gap-6 font-regular leading-7">
						<span>
							For refund inquiries or further clarifications, direct
							correspondence to:
						</span>
						<ul className="list-disc list-inside ml-4 flex flex-col gap-4">
							<li className="font-bold">Company Name: COMPANY NAME</li>
							<li className="font-bold">Registered Address: COMPANY ADDRESS</li>
							<li className="font-bold">
								Company Registration Number: COMPANY NUMBER
							</li>
							<li>
								<span className="font-bold">Email: </span>
								support@medexcuse.com
							</li>
							<li>
								<span className="font-bold">Website: </span>
								https://medexcuse.com
							</li>
						</ul>
					</span>
				</div>
				<hr className="border-gray-200 my-10" />

				<span className="leading-7">
					By engaging with our services and effecting payment, you acknowledge
					that you have read, understood, and unconditionally agreed to the
					foregoing Refund Policy.
				</span>
			</div>
		</div>
	);
}
