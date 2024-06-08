import { Filtering } from '@appTypes/index';
import { Dropdown, IntersectionObserverArea, PageRequestError } from '@components/index';
import { CATEGORY_OPTIONS, LOAD_MORE_PRODUCTS_AMOUNT, PRICE_SORT_OPTIONS } from '@constants/index';
import { useGetProductList } from '@hooks/index';
import { useEffect, useRef, useState } from 'react';

import ProductCard from './ProductCard';
import ProductList from './ProductList';
import style from './style.module.css';

const ProductListPageSkeleton = () => {
  return (
    <div>
      <h1 className="page__title">bpple 상품 목록</h1>
      <div className={style.dropdownGroup}>
        <Dropdown
          label="카테고리"
          name="category"
          selectedValue={CATEGORY_OPTIONS[0].value}
          options={CATEGORY_OPTIONS}
          onChange={() => {}}
        />
        <Dropdown
          label="가격순"
          name="sort"
          selectedValue={PRICE_SORT_OPTIONS[0].value}
          options={PRICE_SORT_OPTIONS}
          onChange={() => {}}
        />
      </div>
      <ProductList.Skeleton productsLength={20} />
    </div>
  );
};

const ProductListPage = () => {
  const [filtering, setFiltering] = useState<Filtering>({ category: '', sort: 'price,asc' });
  const [showMoreProductsSkeleton, setShowMoreProductsSkeleton] = useState(false);
  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  const { products, fetchNextPage, status, error, hasNextPage } = useGetProductList(filtering);

  useEffect(() => {
    if (status !== 'pending' && showMoreProductsSkeleton) {
      setShowMoreProductsSkeleton(false);
    }
  }, [status, showMoreProductsSkeleton]);

  if (error) return <PageRequestError error={error} />;
  if (status === 'pending' || !products) return <ProductListPageSkeleton />;

  const runOnObserverTargetAppear = () => {
    setShowMoreProductsSkeleton(true);
    fetchNextPage();
  };

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFiltering((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1 className="page__title">bpple 상품 목록</h1>
      <div className={style.dropdownGroup}>
        <Dropdown
          label="카테고리"
          name="category"
          options={CATEGORY_OPTIONS}
          selectedValue={filtering.category}
          onChange={handleChangeOption}
        />
        <Dropdown
          label="가격순"
          name="sort"
          options={PRICE_SORT_OPTIONS}
          selectedValue={filtering.sort}
          onChange={handleChangeOption}
        />
      </div>
      <ProductList products={products}>
        {showMoreProductsSkeleton &&
          Array.from({ length: LOAD_MORE_PRODUCTS_AMOUNT }).map(() => <ProductCard.Skeleton />)}
        <IntersectionObserverArea targetRef={observerTargetRef} runOnObserverTargetAppear={runOnObserverTargetAppear}>
          <div className={style.observerTarget} ref={hasNextPage ? observerTargetRef : null}>
            <span>observer target</span>
          </div>
        </IntersectionObserverArea>
      </ProductList>
    </div>
  );
};

export default ProductListPage;
