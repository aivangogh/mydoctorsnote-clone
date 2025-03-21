import { WrapperLayout } from "@/layouts/wrapper-layout";
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
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
