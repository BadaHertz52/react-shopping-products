import React, { useEffect } from 'react';

interface UseIntersectionObserver {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  runOnObserverTargetAppear: () => void;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({ targetRef, runOnObserverTargetAppear, options }: UseIntersectionObserver) => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    if (!entries[0].isIntersecting) return;

    runOnObserverTargetAppear();
  };

  const observer = new IntersectionObserver(callback, { ...options, threshold: 1 });

  useEffect(() => {
    if (!targetRef.current) return;

    observer.observe(targetRef.current);

    return () => {
      if (!targetRef.current) return;
      observer.unobserve(targetRef.current);
    };
  }, [targetRef, runOnObserverTargetAppear]);
};

export default useIntersectionObserver;
