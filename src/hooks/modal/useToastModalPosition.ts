import { useLayoutEffect, useState } from 'react';

interface UseToastModalPositionProps {
  targetEl: HTMLElement | undefined | null;
  placement: 'top' | 'bottom' | 'same';
}

function useToastModalPosition({ targetEl, placement }: UseToastModalPositionProps) {
  const [toastModalPosition, setToastModalPosition] = useState<{ top?: number; bottom?: number; left: number } | null>(
    null,
  );

  const getPosition = (domRect: DOMRect) => {
    const { left, top, height } = domRect;
    if (placement === 'top') {
      return {
        bottom: top,
        left,
      };
    }

    if (placement === 'bottom') {
      return {
        top: top + height,
        left,
      };
    }

    return {
      top: top,
      left,
    };
  };

  const updateToastModalPosition = (targetEl: HTMLElement) => {
    const domRect = targetEl.getBoundingClientRect();

    setToastModalPosition(getPosition(domRect));
  };

  useLayoutEffect(() => {
    if (!targetEl) return;
    updateToastModalPosition(targetEl);
  }, [targetEl]);

  return { toastModalPosition };
}

export default useToastModalPosition;
