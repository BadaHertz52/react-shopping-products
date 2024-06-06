import { Product } from '@appTypes/index';

import CartActionButton from '../CartActionButton';

import InvalidProductCard from './InvalidProductCard';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isInvalidData = product.imageUrl === 'string';

  if (isInvalidData) return <InvalidProductCard />;

  return (
    <li className="product-card">
      <img src={product.imageUrl} alt="" className="product-card__image" />
      <div className="product-card__contents">
        <p className="product-name">{product.name}</p>
        <p className="text">{product.price.toLocaleString()}원</p>
        <CartActionButton productId={product.id} />
      </div>
    </li>
  );
};

export default ProductCard;
