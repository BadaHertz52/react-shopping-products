import { Product } from '@appTypes/index';
import { getSkeletonClassName } from '@utils/index';

import CartActionButton from '../CartActionButton';
import cartActionButtonStyle from '../CartActionButton/style.module.css';

import InvalidProductCard from './InvalidProductCard';
import style from './style.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isInvalidData = product.imageUrl === 'string';

  if (isInvalidData) return <InvalidProductCard />;

  return (
    <li className={style.productCard}>
      <img src={product.imageUrl} alt="" className={style.image} />
      <div className={style.contents}>
        <p className={style.name}>{product.name}</p>
        <p className="text">{product.price.toLocaleString()}원</p>
        <CartActionButton productId={product.id} />
      </div>
    </li>
  );
};

const Skeleton = () => {
  return (
    <li className={style.productCard}>
      <div className={getSkeletonClassName(`${style.image} ${style.skeletonImage}`)} />
      <div className={style.contents}>
        <p className={getSkeletonClassName(style.skeletonRow)} />
        <p className={getSkeletonClassName(style.skeletonRow)} />
        <div className={getSkeletonClassName(`${cartActionButtonStyle.cartActionButton} ${style.skeletonImage}`)} />
      </div>
    </li>
  );
};

ProductCard.Skeleton = Skeleton;

export default ProductCard;
