import { cn } from "@/lib/utils";

type CardProps = {
	className?: string;
	children: React.ReactNode;
};

function Card({ className, children }: CardProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-4 bg-blue-100 px-4 pt-4 pb-6 rounded-lg",
				className,
			)}
		>
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
}

type CardHeaderProps = {
	label: string;
	className?: string;
};
function CardHeader({ label, className }: CardHeaderProps) {
	return (
		<>
			<h1 className={cn("font-bold text-xl md:text-2xl", className)}>
				{label}
			</h1>
		</>
	);
}

type CardContentProps = {
	children: React.ReactNode;
	className?: string;
};
function CardContent({ children, className }: CardContentProps) {
	return (
		<>
			<div className={cn("text-gray-500", className)}>{children}</div>
		</>
	);
}

export { Card, CardContent, CardHeader };
