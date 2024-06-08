import { useOpenModal, useToastModalPosition } from '@hooks/index';
import { ToastModal } from 'badahertz52-react-modules-components';
import { useLayoutEffect } from 'react';

import CartActionError from './CartActionError';
interface CartActionErrorModalProps {
  error: Error | null;
}

const CartActionErrorModal = ({ error }: CartActionErrorModalProps) => {
  const { isModalOpen, closeModal, rootEl, openModal } = useOpenModal();

  const { toastModalPosition } = useToastModalPosition({
    targetEl: document.getElementsByTagName('header')[0],
    placement: 'bottom',
  });

  useLayoutEffect(() => {
    if (error) openModal();
  }, [error]);

  return (
    <>
      {toastModalPosition && (
        <ToastModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          position={toastModalPosition}
          modalTargetEl={rootEl}
          toastDuration={3_000}
          isNeedAnimation={true}
          animationDuration={2_000}
          backgroundColor={{ modal: '#ffc9c9' }}
          contentsPadding="0"
          boxShadow=""
        >
          <CartActionError />
        </ToastModal>
      )}
    </>
  );
};

export default CartActionErrorModal;
