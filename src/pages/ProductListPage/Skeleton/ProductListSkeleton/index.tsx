import ProductCardSkeleton from '../ProductCardSkeleton';

import '../../ProductList/ProductList.css';

interface ProductListSkeletonProps {
  productsLength: number;
}

const ProductListSkeleton = ({ productsLength }: ProductListSkeletonProps) => {
  return (
    <section className="product-list-wrapper">
      <ul className="product-list">
        {Array.from({ length: productsLength }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProductListSkeleton;
