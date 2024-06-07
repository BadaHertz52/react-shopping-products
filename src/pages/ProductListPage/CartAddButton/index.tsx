import { AddCartIcon } from '@assets/index';
import { CartActionErrorModal } from '@components/index';
import { useAddCartItem } from '@hooks/index';

import style from './style.module.css';

interface CartAddButtonProps {
  productId: number;
}

const CartAddButton = ({ productId }: CartAddButtonProps) => {
  const { mutateAsync: addMutate, error, isPending } = useAddCartItem();

  const handleClickButton = () => {
    addMutate({ productId });
  };

  return (
    <>
      <button onClick={handleClickButton} className={style.cartAddButton} disabled={isPending}>
        <img src={AddCartIcon} alt="상품 장바구니 담기" />
        <span className="button__text">담기</span>
      </button>
      <CartActionErrorModal error={error} />
    </>
  );
};

export default CartAddButton;
