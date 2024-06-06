import { useOpenModal, useToastModalPosition } from '@hooks/index';
import { ToastModal } from 'badahertz52-react-modules-components';

import CartActionError from './CartActionError';
interface CartActionErrorModalProps {
  error: Error | null;
}

const CartActionErrorModal = ({ error }: CartActionErrorModalProps) => {
  const { openModal, setOpenModal, rootEl } = useOpenModal({ isOpenModal: !!error });

  const { toastModalPosition } = useToastModalPosition({
    targetEl: document.getElementsByTagName('header')[0],
    placement: 'bottom',
  });

  return (
    <>
      {toastModalPosition && (
        <ToastModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          position={toastModalPosition}
          modalTargetEl={rootEl}
          toastDuration={3000}
          isNeedAnimation={true}
          animationDuration={2500}
        >
          <CartActionError />
        </ToastModal>
      )}
    </>
  );
};

export default CartActionErrorModal;
