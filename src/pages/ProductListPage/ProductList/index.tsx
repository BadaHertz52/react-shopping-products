import { Product } from '@appTypes/index';
import { useRef } from 'react';

import ProductCard from '../ProductCard';

import style from './style.module.css';

interface ProductListProps {
  products: Product[];
  children: React.ReactNode;
}
function ProductList({ products, children }: ProductListProps) {
  const productListRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={productListRef} className={style.wrapper}>
      <ul className={style.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {children}
      </ul>
    </section>
  );
}

const Skeleton = ({ productsLength }: { productsLength: number }) => {
  return (
    <section className={style.wrapper}>
      <ul className={style.productList}>
        {Array.from({ length: productsLength }).map((_, index) => (
          <ProductCard.Skeleton key={index} />
        ))}
      </ul>
    </section>
  );
};

ProductList.Skeleton = Skeleton;

export default ProductList;
