import { CartItem } from '@appTypes/index';
import { getSkeletonClassName } from '@utils/index';

import style from './style.module.css';

interface TotalAmountProps {
  cartList: CartItem[] | undefined;
}

const TotalAmount = ({ cartList }: TotalAmountProps) => {
  const calculateTotalAmount = () => {
    if (!cartList || !cartList[0]) return '0원';

    const amount = cartList.reduce((prev, curr) => prev + curr.quantity * curr.product.price, 0);
    return amount.toLocaleString();
  };

  return (
    <section className={style.totalAmount}>
      <p className={style.title}>총 결제 금액</p>
      <p className={style.price}>{calculateTotalAmount()}</p>
    </section>
  );
};

const Skeleton = () => {
  return (
    <section className={style.totalAmount}>
      <p className={getSkeletonClassName(style.title)}></p>
      <p className={getSkeletonClassName(style.price)}></p>
    </section>
  );
};

TotalAmount.Skeleton = Skeleton;

export default TotalAmount;
