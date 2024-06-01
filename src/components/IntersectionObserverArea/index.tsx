import { useIntersectionObserver } from '@src/hooks';
import React from 'react';

interface IntersectionObserverAreaProps {
  runOnObserverTargetAppear: () => void;
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
}

const IntersectionObserverArea = ({
  targetRef,
  runOnObserverTargetAppear,
  children,
}: React.PropsWithChildren<IntersectionObserverAreaProps>) => {
  useIntersectionObserver({ targetRef, runOnObserverTargetAppear });

  return <div>{children}</div>;
};

export default IntersectionObserverArea;
