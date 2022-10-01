import { useIntersectionObserver } from '@react-hookz/web';
import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

const useSticky = (ref: MutableRefObject<HTMLElement | null>): boolean => {
  const intersection = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '0px',
    threshold: [1],
  });
  const isSticky = intersection ? !intersection.isIntersecting : false;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = '-1px';
    }
  }, [ref]);

  return isSticky;
};

export default useSticky;
