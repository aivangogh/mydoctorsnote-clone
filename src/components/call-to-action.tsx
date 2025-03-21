import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  descriptionProps?: {
    className?: string;
  }
}

function CallToActionButton({
  label,
  descriptionProps
}: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button className="space-x-4 w-82 py-4">
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Button>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/shield.svg"
          alt="Guard Logo"
          width={30}
          height={30}
          className="w-[20px] md:w-[30px] h-auto"
        />
        <span className={cn("text-white text-sm md:text-lg font-medium", descriptionProps?.className)}>100% Risk-Free Money Back Guarantee</span>
      </div>
    </div>
  );
}

export { CallToActionButton };
