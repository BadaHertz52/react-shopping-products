import { MAX_QUANTITY } from '@constants/index';
import { useCartItemQuantity } from '@hooks/index';
import { useEffect, useState } from 'react';

import CountButton from '../CountButton';
import { CartActionErrorModal } from '../Fallbacks';

import QuantityLimitModal from './QuantityLimitModal';
import style from './style.module.css';

interface QuantityControlProps {
  quantity: number;
  cartItemId: number;
}

const QuantityControl = ({ quantity, cartItemId }: QuantityControlProps) => {
  const { mutateAsync: quantityMutate, error, isPending } = useCartItemQuantity();
  const [isTryOverMax, setIsTryOverMax] = useState(false);

  const isMaxQuantity = quantity === MAX_QUANTITY;

  const increaseQuantity = () => {
    setIsTryOverMax(isMaxQuantity);
    if (isMaxQuantity) return;

    quantityMutate({ cartItemId, quantity: quantity + 1 });
  };

  const decreaseQuantity = () => {
    setIsTryOverMax(false);
    quantityMutate({ cartItemId, quantity: quantity - 1 });
  };

  useEffect(() => {
    return () => {
      setIsTryOverMax(false);
    };
  }, []);

  return (
    <>
      <div className={style.quantityControl}>
        <CountButton quantitySign="minus" disabled={isPending} onClick={decreaseQuantity} />
        <span className="text">{quantity}</span>
        <CountButton quantitySign="plus" disabled={isPending} onClick={increaseQuantity} />
        <QuantityLimitModal isTryOverMax={isTryOverMax} setIsTryOverMax={setIsTryOverMax} />
      </div>
      <CartActionErrorModal error={error} />
    </>
  );
};

export default QuantityControl;
