import { cn } from "@/lib/utils";

type ContainerLayoutProps = React.ComponentProps<"div">

function ContainerLayout({
	className,
	children,
  ...props
}: ContainerLayoutProps) {
	return (
		<div {...props} className={cn("px-4 py-8 md:px-[4.5rem] md:py-[2.5rem] flex flex-col", className)}>
			{children}
		</div>
	);
}

export { ContainerLayout };
