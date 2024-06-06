import { CartActionErrorModal, QuantityControl } from '@components/index';
import { useCartList } from '@hooks/index';

import CartAddButton from '../CartAddButton';

import style from './style.module.css';

interface CartActionButtonProps {
  productId: number;
}

const CartActionButton = ({ productId }: CartActionButtonProps) => {
  const { cartListMap, error } = useCartList();
  const cartItem = cartListMap?.get(productId);

  const className = `${style.cartActionButton} ${cartItem ? style.quantity : style.add} `;

  return (
    <div className={className}>
      {cartItem ? (
        <QuantityControl cartItemId={cartItem.id} quantity={cartItem.quantity} />
      ) : (
        <CartAddButton productId={productId} />
      )}
      <CartActionErrorModal error={error} />
    </div>
  );
};

export default CartActionButton;
