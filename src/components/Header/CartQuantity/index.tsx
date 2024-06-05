import { CartListContext } from '@contexts/index';
import { useTargetContext } from '@hooks/index';

import style from './style.module.css';

const MAX_QUANTITY = 50;

const CartQuantity = () => {
  const { cartListMap, isSuccess } = useTargetContext(CartListContext);

  const NONE_CART_LIST_LENGTH = 0;
  const cartListLength = cartListMap?.size ?? NONE_CART_LIST_LENGTH;
  const quantityClassName = `${cartListLength > MAX_QUANTITY ? style.over : ''}`;

  const getBadgeNumber = () => (cartListLength > MAX_QUANTITY ? MAX_QUANTITY : cartListLength);
  if (!isSuccess) return <></>;

  return <span className={quantityClassName}>{getBadgeNumber()}</span>;
};

export default CartQuantity;
