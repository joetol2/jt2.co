import { useEffect, useRef, useState } from "react";

// Reveals once the element's top has come `threshold` of the way up the
// viewport. This is done with a root margin rather than an intersection
// ratio, because a ratio can never be reached by an element taller than the
// screen, which would leave long sections invisible.
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: `0px 0px -${Math.round(threshold * 100)}% 0px` }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
