import { cn } from "@/lib/utils";
import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn("flex items-center justify-center bg-primary px-4 py-4 text-white rounded-xl font-semibold cursor-pointer hover:opacity-80", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button };
