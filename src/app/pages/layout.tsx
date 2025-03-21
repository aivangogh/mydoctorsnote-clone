export default function PagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex mx-52 px-20 py-10">{children}</div>;
}
