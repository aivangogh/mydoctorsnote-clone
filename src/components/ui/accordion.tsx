"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
};

function AccordionItem({
  title,
  children,
  className,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>(defaultOpen ? "none" : "0px");

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        setMaxHeight(isOpen ? `${contentHeight}px` : "0px");
      }
    };

    updateHeight();

    // Add resize listener to handle dynamic content changes
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isOpen]);

  return (
    <div className={cn("mb-4 w-full", className)}>
      <button
        className="flex flex-row items-center justify-between w-full border border-black/50 px-4 py-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-medium text-base">{title}</span>
        <span
          className={cn(
            "text-xl transition-transform duration-300",
            isOpen ? "rotate-0" : "rotate-90"
          )}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div
          ref={contentRef}
          className="p-4 text-gray-600 text-sm leading-7"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

function Accordion({ children, className }: AccordionProps) {
  return <div className={cn(className)}>{children}</div>;
}

export { Accordion, AccordionItem };
