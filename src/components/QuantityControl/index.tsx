import { MAX_QUANTITY } from '@constants/index';
import { useChangeCartItemQuantity, useOpenModal } from '@hooks/index';

import CountButton from '../CountButton';
import { CartActionErrorModal } from '../Fallbacks';

import QuantityLimitModal from './QuantityLimitModal';
import style from './style.module.css';

interface QuantityControlProps {
  quantity: number;
  cartItemId: number;
}

const QuantityControl = ({ quantity, cartItemId }: QuantityControlProps) => {
  const { mutateAsync: quantityMutate, error, isPending } = useChangeCartItemQuantity();
  const {
    openModal: openLimitModal,
    closeModal: closeLimitModal,
    isModalOpen: isLimitModalOpen,
    rootEl,
  } = useOpenModal();

  const isMaxQuantity = quantity === MAX_QUANTITY;

  const increaseQuantity = () => {
    if (isMaxQuantity) return openLimitModal();

    quantityMutate({ cartItemId, quantity: quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (isLimitModalOpen) closeLimitModal();
    quantityMutate({ cartItemId, quantity: quantity - 1 });
  };

  return (
    <>
      <div className={style.quantityControl}>
        <CountButton quantitySign="minus" disabled={isPending} onClick={decreaseQuantity} />
        <span className="text">{quantity}</span>
        <CountButton quantitySign="plus" disabled={isPending} onClick={increaseQuantity} />
      </div>
      <CartActionErrorModal error={error} />
      <QuantityLimitModal rootEl={rootEl} isModalOpen={isLimitModalOpen} closeModal={closeLimitModal} />
    </>
  );
};

export default QuantityControl;
