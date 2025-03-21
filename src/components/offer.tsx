"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  discount: number;
  className?: string;
}

function Offer({
  discount,
  className
}: Props) {
  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={cn("flex items-center justify-center gap-1 text-white font-bold bg-primary py-1.5", className)}>
      <span>
        {`${discount * 100}% OFF if you order in the next`}
      </span>
      <span>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

export { Offer };
