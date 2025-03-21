import { cn } from "@/lib/utils";

function ContainerLayout({
	className,
	children,
}: { className?: string; children: React.ReactNode }) {
	return (
		<div className={cn("px-4 py-8 md:px-[4.5rem] md:py-[2.5rem] flex flex-col", className)}>
			{children}
		</div>
	);
}

export { ContainerLayout };
