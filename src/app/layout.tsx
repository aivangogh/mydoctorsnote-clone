import { Header } from "@/components/header";
import { Offer } from "@/components/offer";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Instrument_Sans({
	variable: "--font-istrument-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "My Doctors Note Clone",
	description: "My Doctors Note Clone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				<div className="flex flex-col">
					<Offer discount={0.3} className="sticky top-0 z-100" />
					<Header className="sticky z-99" />
				</div>
				{children}
			</body>
		</html>
	);
}
