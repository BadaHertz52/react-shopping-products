import { CartItem } from '@appTypes/index';
import { CartActionErrorModal, QuantityControl } from '@components/index';
import { useDeleteCartItem } from '@hooks/index';
import { getSkeletonClassName } from '@utils/index';

import style from './style.module.css';

interface DeleteButtonProps {
  isPending: boolean;
  handleClick: () => void;
}

const DeleteButton = ({ isPending, handleClick }: DeleteButtonProps) => {
  return (
    <button className={style.deleteButton} disabled={isPending} onClick={handleClick}>
      <span className="label">삭제</span>
    </button>
  );
};

interface CartItemInfoProps {
  cartItem: CartItem;
}

const CartItemInfo = ({ cartItem }: CartItemInfoProps) => {
  return (
    <div className={style.info}>
      <p className={style.name}>{cartItem.product.name}</p>
      <p className={style.price}>{cartItem.product.price.toLocaleString()}</p>
      <QuantityControl cartItemId={cartItem.id} quantity={cartItem.quantity} />
    </div>
  );
};

interface CartItemCardProps {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const { mutateAsync: deleteMutate, error, isPending } = useDeleteCartItem();

  const handleClickDeleteButton = () => {
    deleteMutate({ cartItemId: cartItem.id });
  };

  return (
    <li className={style.cartItemCard}>
      <img className={style.img} src={cartItem.product.imageUrl} />
      <CartItemInfo cartItem={cartItem} />
      <DeleteButton isPending={isPending} handleClick={handleClickDeleteButton} />
      <CartActionErrorModal error={error} />
    </li>
  );
};

const Skeleton = () => {
  return (
    <li className={style.cartItemCard}>
      <div className={getSkeletonClassName(style.img)} />
      <div className={style.info}>
        <p className={getSkeletonClassName(style.name)}></p>
        <p className={getSkeletonClassName(style.price)}></p>
      </div>
      <button className={getSkeletonClassName(`${style.deleteButton} ${style.skeletonDeleteButton}`)}></button>
    </li>
  );
};

CartItemCard.Skeleton = Skeleton;

export default CartItemCard;
