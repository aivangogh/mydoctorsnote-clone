import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Header({
	className,
	...props
}: React.ComponentProps<"header">) {
	return (
		<>
			<header
				{...props}
				className={cn(
					"bg-white border-b border-gray-200 flex items-center justify-center py-4 md:py-[1.8rem]",
					className,
				)}
			>
				<Link href="/">
					<Image
						src="/icons/brand-name.webp"
						alt="logo"
						width={250}
						height={100}
						className="w-[150px] md:w-[250px] h-auto"
					/>
				</Link>
			</header>
		</>
	);
}
