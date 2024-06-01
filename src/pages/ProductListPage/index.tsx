import { fetchProduct } from '@apis/index';
import { Filtering, Product } from '@appTypes/index';
import { Dropdown, IntersectionObserverArea } from '@components/index';
import { CATEGORY_OPTIONS, PRICE_SORT_OPTIONS, PRODUCT_LIST_PAGE } from '@constants/index';
import { useFilteredProducts, useStackProducts } from '@hooks/index';
import useFetch from '@hooks/useFetch';
import { useCallback, useEffect, useRef, useState } from 'react';

import ProductList from './ProductList';
import style from './style.module.css';

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(PRODUCT_LIST_PAGE.first);
  const [isLastPage, setIsLastPage] = useState(false);
  const [filtering, setFiltering] = useState<Filtering>({ category: '', sort: 'price,asc' });
  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  const { fetch, loading, error } = useFetch<typeof fetchProduct>(fetchProduct);

  const { getStackedProducts } = useStackProducts({
    fetch,
  });
  const { getFilteredProducts } = useFilteredProducts({
    fetch,
  });

  const updateState = ({
    isLast,
    newProducts,
    newPage,
  }: {
    isLast: boolean;
    newProducts: Product[];
    newPage: number;
  }) => {
    setIsLastPage(isLast);
    setProducts(newProducts);
    setPage(newPage);
  };

  const runOnObserverTargetAppear = useCallback(async () => {
    const result = await getStackedProducts({ page, isLastPage, products, filtering });
    if (!result) return;

    updateState(result);
  }, [page, products, isLastPage, filtering]);

  const handleFilteringProducts = async () => {
    const result = await getFilteredProducts(filtering);
    if (!result) return;

    updateState(result);
  };

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFiltering((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    handleFilteringProducts();
  }, [filtering]);

  useEffect(() => {
    if (error) {
      throw new Error('예기치 못한 에러 발생');
    }
  }, [error]);

  return (
    <div>
      <h1 className="page__title">bpple 상품 목록</h1>
      <div className={style.dropdownGroup}>
        <Dropdown label="카테고리" name="category" options={CATEGORY_OPTIONS} onChange={handleChangeOption} />
        <Dropdown label="가격순" name="sort" options={PRICE_SORT_OPTIONS} onChange={handleChangeOption} />
      </div>
      <ProductList products={products} loading={loading}>
        <IntersectionObserverArea targetRef={observerTargetRef} runOnObserverTargetAppear={runOnObserverTargetAppear}>
          <div className={style.observerTarget} ref={observerTargetRef}>
            <span>observer target</span>
          </div>
        </IntersectionObserverArea>
      </ProductList>
    </div>
  );
}

export default ProductListPage;
