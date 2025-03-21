import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Offer } from "@/components/offer";
import type { Metadata } from "next";
import { Assistant, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
	variable: "--font-instrument-sans",
	subsets: ["latin"],
});

const assistantSans = Assistant({
	variable: "--font-assistant",
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
			<body
				className={`${instrumentSans.variable} ${assistantSans.variable} antialiased`}
			>
				<Offer discount={0.3} className="sticky top-0 z-100" />
				<Header className="sticky z-99" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
