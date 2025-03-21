import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header({
	className,
	...props
}: React.ComponentProps<"header">) {
	return (
		<>
			<header
				{...props}
				className={cn(
					"bg-white flex items-center justify-center py-4 md:py-[1.8rem]",
					className,
				)}
			>
				<Image
					src="/icons/brand-name.webp"
					alt="logo"
					width={250}
					height={100}
          className="w-[200px] md:w-[250px] h-auto"
				/>
			</header>
		</>
	);
}
