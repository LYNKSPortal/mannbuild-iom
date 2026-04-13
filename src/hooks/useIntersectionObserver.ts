import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element is already visible on mount
    const checkInitialVisibility = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;
      if (isVisible && !hasAnimatedRef.current) {
        setIsIntersecting(true);
        hasAnimatedRef.current = true;
      }
    };

    // Check initial visibility immediately and after a short delay
    checkInitialVisibility();
    const timeoutId = setTimeout(checkInitialVisibility, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setIsIntersecting(true);
          hasAnimatedRef.current = true;
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of element is visible
        rootMargin: '0px 0px -100px 0px', // Trigger before element comes into view
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [options]);

  return [ref, isIntersecting];
}
