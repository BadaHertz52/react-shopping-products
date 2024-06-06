import { Dropdown } from '@src/components';
import { CATEGORY_OPTIONS, PRICE_SORT_OPTIONS } from '@src/constants';

import style from '../../style.module.css';
import ProductListSkeleton from '../ProductListSkeleton';

const ProductListPageSkeleton = () => {
  return (
    <div>
      <h1 className="page__title">bpple 상품 목록</h1>
      <div className={style.dropdownGroup}>
        <Dropdown label="카테고리" name="category" options={CATEGORY_OPTIONS} onChange={() => {}} />
        <Dropdown label="가격순" name="sort" options={PRICE_SORT_OPTIONS} onChange={() => {}} />
      </div>
      <ProductListSkeleton productsLength={20} />
    </div>
  );
};

export default ProductListPageSkeleton;
