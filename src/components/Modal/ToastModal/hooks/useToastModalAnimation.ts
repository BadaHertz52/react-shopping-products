import { useLayoutEffect, useState } from 'react';

export default function useToastModalAnimation({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  const [isOn, setIsOn] = useState(true);

  /**
   * 토스트 모달이 등장,퇴장 시 opacity 전환 시간
   */
  const timeout = 3000;

  const fadeInModal = () => {
    setIsOn(true);
  };
  const fadeOutModal = () =>
    setTimeout(() => {
      setIsOn(false);
    }, timeout);

  const setTimeoutToCloseModal = () =>
    setTimeout(() => {
      closeModal();
    }, timeout);

  useLayoutEffect(() => {
    fadeInModal();
    const fadeOutTimer = fadeOutModal();
    const closeModalTimer = setTimeoutToCloseModal();

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeModalTimer);
    };
  }, [isOpen]);

  return { isOn };
}
