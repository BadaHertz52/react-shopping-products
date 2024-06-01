import { fetchProduct } from '@apis/index';
import { Product } from '@appTypes/index';
import { LOAD_MORE_PRODUCTS_AMOUNT, PRODUCT_LIST_PAGE } from '@constants/index';
import Products from '@mocks/data/products.json';
import { renderHook, waitFor } from '@testing-library/react';

import useFetch from '../useFetch';
import useStackProducts, { StackPrams } from '../useStackProducts';

describe('상품 목록 무한 스크롤 테스트', () => {
  const STACK_PARAMS: StackPrams = {
    page: PRODUCT_LIST_PAGE.first,
    products: Products.slice(0, 20) as Product[],
    filtering: { category: '', sort: 'price,asc' },
    isLastPage: false,
  };
  it('다음 목록을 불러올 때 상품 4개를 불러오게 된다.', async () => {
    const { result } = renderHook(() => {
      const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
      const { getStackedProducts } = useStackProducts({
        fetch,
      });
      return { getStackedProducts };
    });

    await waitFor(async () => {
      const response = await result.current.getStackedProducts(STACK_PARAMS);

      expect(response).toBeDefined();
      if (!response) return;

      expect(response.newPage).toBe(PRODUCT_LIST_PAGE.second);
      expect(response.newProducts.length - STACK_PARAMS.products.length).toBe(LOAD_MORE_PRODUCTS_AMOUNT);
    });
  });
  it('마지막 목록을 불러오고 다음 상품을 불러올 때 상품을 불러오지 않는다.', async () => {
    const { result } = renderHook(() => {
      const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
      const { getStackedProducts } = useStackProducts({
        fetch,
      });
      return { getStackedProducts };
    });

    await waitFor(async () => {
      const response = await result.current.getStackedProducts({ ...STACK_PARAMS, isLastPage: true });

      expect(response).toBeUndefined();
    });
  });
});
