import { getSkeletonClassName } from '@utils/index';

import style from './style.module.css';

interface TotalAmountProps {
  totalAmount: number;
}

const TotalAmount = ({ totalAmount }: TotalAmountProps) => {
  return (
    <section className={style.totalAmount}>
      <p className={style.title}>총 결제 금액</p>
      <p className={style.price}>{totalAmount.toLocaleString()}</p>
    </section>
  );
};

const Skeleton = () => {
  return (
    <section className={style.totalAmount}>
      <p className={getSkeletonClassName(style.title)} />
      <p className={getSkeletonClassName(style.price)} />
    </section>
  );
};

TotalAmount.Skeleton = Skeleton;

export default TotalAmount;
