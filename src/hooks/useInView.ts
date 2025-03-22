"use client"

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {},
): [React.RefObject<T | null>, boolean] {
  const [isInView, setIsInView] = useState<boolean>(false)
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) {
      return;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isInView];
}

export { useInView };
