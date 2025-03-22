export default function PagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex px-4 md:mx-72 py-10">{children}</div>;
}
