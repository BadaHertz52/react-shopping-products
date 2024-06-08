import { CartActionErrorModal } from '@components/Fallbacks/index';
import { useGetCartList } from '@hooks/index';

import style from './style.module.css';

const MAX_QUANTITY = 50;

const CartQuantity = () => {
  const { cartListMap, isSuccess, error } = useGetCartList();

  const NONE_CART_LIST_LENGTH = 0;
  const cartListLength = cartListMap?.size ?? NONE_CART_LIST_LENGTH;
  const quantityClassName = `${cartListLength > MAX_QUANTITY ? style.over : ''}`;

  const getBadgeNumber = () => (cartListLength > MAX_QUANTITY ? MAX_QUANTITY : cartListLength);

  if (!isSuccess || !cartListLength) {
    return;
  }

  return (
    <>
      <div className={style.quantityWrapper}>
        <span className={quantityClassName}>{getBadgeNumber()}</span>
      </div>
      <CartActionErrorModal error={error} />
    </>
  );
};

export default CartQuantity;
