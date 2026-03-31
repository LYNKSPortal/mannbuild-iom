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
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && !hasAnimatedRef.current) {
        setIsIntersecting(true);
        hasAnimatedRef.current = true;
      }
    };

    // Check initial visibility immediately
    checkInitialVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setIsIntersecting(true);
          hasAnimatedRef.current = true;
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element comes into view
        ...options,
      }
    );

    observer.observe(element);

    // Handle scroll events for elements that might be visible but not triggering intersection
    const handleScroll = () => {
      checkInitialVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options]);

  return [ref, isIntersecting];
}
