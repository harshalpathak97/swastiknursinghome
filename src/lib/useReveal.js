import { useEffect, useRef } from 'react';

/**
 * Adds the `is-in` class to elements with `.ds-reveal` once they enter the viewport.
 * Idempotent — call once on the page; it will pick up all reveal elements.
 */
export default function useReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll('.ds-reveal:not(.is-in)');
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    targets.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  });
}
