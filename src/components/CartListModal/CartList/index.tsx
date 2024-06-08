import { CartItem } from '@appTypes/index';
import { BasketIcon } from '@assets/index';

import CartItemCard from '../CartItemCard';

import style from './style.module.css';

interface CartListProps {
  cartList: CartItem[] | undefined;
}

const CartList = ({ cartList }: CartListProps) => {
  return (
    <ul className={style.cartList}>
      {cartList?.length ? (
        cartList.map((cartItem) => <CartItemCard key={cartItem.id} cartItem={cartItem} />)
      ) : (
        <div className={style.empty}>
          <img className={style.cartImg} src={BasketIcon} alt="카트 아이콘" /> <span>장바구니가 비어있습니다.</span>{' '}
        </div>
      )}
    </ul>
  );
};

const Skeleton = () => {
  const LENGTH = 2;

  return (
    <ul className={style.cartList}>
      {Array.from({ length: LENGTH }, (index) => `cartItemCardSkeleton-${index}`).map((i) => (
        <CartItemCard.Skeleton key={i} />
      ))}
    </ul>
  );
};

CartList.Skeleton = Skeleton;

export default CartList;
