"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Header } from "./header";
import { Offer } from "./offer";

type MainHeaderProps = {
	className?: string;
};

function MainHeader({ className }: MainHeaderProps) {
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [lastScroll, setLastScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			if (currentScroll > lastScroll && currentScroll > 0) {
				// Scrolling down
				setIsScrollingUp(false);
			} else if (currentScroll < lastScroll) {
				// Scrolling up
				setIsScrollingUp(true);
			}
			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScroll]);

	return (
		<div className={cn("sticky top-0 z-50", className)}>
			<Offer discount={0.3} className="sticky top-0 z-100" />
			<Header
				className={cn(
					"transition-transform duration-200 sticky z-40",
					isScrollingUp ? "translate-y-0" : "-translate-y-[calc(100%+3rem)]",
				)}
			/>
		</div>
	);
}

export { MainHeader };
