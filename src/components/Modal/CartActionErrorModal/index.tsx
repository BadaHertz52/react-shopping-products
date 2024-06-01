import { CartActionError, ToastModal } from '@components/index';
import { useLayoutEffect, useState } from 'react';

import useToastModalPosition from '../ToastModal/hooks/useToastModalPosition';

interface CartActionErrorModalProps {
  error: boolean;
}

const CartActionErrorModal = ({ error }: CartActionErrorModalProps) => {
  const { toastModalPosition } = useToastModalPosition({
    targetEl: document.getElementsByTagName('header')[0],
    placement: 'bottom',
  });

  const [isOpenModal, setIsOpenToastModal] = useState(false);

  const closeModal = () => {
    setIsOpenToastModal(false);
  };

  useLayoutEffect(() => {
    setIsOpenToastModal(error);
  }, [error]);

  return (
    <>
      {toastModalPosition && (
        <ToastModal isOpen={isOpenModal} closeModal={closeModal} position={toastModalPosition}>
          <CartActionError />
        </ToastModal>
      )}
    </>
  );
};

export default CartActionErrorModal;
