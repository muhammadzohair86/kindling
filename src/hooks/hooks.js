import { useEffect } from 'react';

export const usePageTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | Kindling` : 'Kindling | Stories from the trail, the table and beyond';
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
