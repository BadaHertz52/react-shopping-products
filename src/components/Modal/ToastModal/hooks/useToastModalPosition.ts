import { useEffect, useState } from 'react';

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

  const updateToastModalPosition = () => {
    if (!targetEl) return console.error('토스트 모달을 열 위치를 찾을 수 없습니다.');

    const domRect = targetEl.getBoundingClientRect();

    setToastModalPosition(getPosition(domRect));
  };

  useEffect(() => {
    updateToastModalPosition();
  }, [targetEl]);

  return { toastModalPosition };
}

export default useToastModalPosition;
