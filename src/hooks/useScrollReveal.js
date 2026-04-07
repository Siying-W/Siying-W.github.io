import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using Intersection Observer.
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1) to trigger animation
 * @param {string} options.rootMargin - Margin around the root
 * @returns {React.RefObject} ref to attach to the element
 */
export const useScrollReveal = ({ threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
};

/**
 * Hook that returns multiple refs for staggered child animations.
 * @param {number} count - Number of children to animate
 * @param {Object} options
 * @returns {React.RefObject[]} array of refs
 */
export const useStaggerReveal = (count, { threshold = 0.1, rootMargin = '0px 0px -30px 0px' } = {}) => {
  const refs = useRef([]);

  useEffect(() => {
    const observers = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add stagger delay via CSS custom property
            entry.target.style.transitionDelay = `${index * 120}ms`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count, threshold, rootMargin]);

  return (index) => (el) => {
    refs.current[index] = el;
  };
};
