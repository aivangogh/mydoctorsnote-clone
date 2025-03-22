"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type FadeInSectionProps = {
	children: React.ReactNode;
  delay?: number;
	className?: string;
};

function FadeInSection({ children, delay = 0, className }: FadeInSectionProps) {
	const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

	return (
		<div
			ref={ref}
			className={cn(
				"opacity-0 transition-all duration-500",
				isInView ? "opacity-100" : "",
				className,
			)}
      style={{ transitionDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
}

export { FadeInSection };
