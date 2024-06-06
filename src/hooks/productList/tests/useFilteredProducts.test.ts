import { fetchProduct } from '@apis/index';
import { Category, Filtering } from '@appTypes/index';
import { CATEGORY_OPTIONS } from '@constants/index';
import { renderHook, waitFor } from '@testing-library/react';

import useFetch from '../../useFetch';
import useFilteredProducts from '../useFilteredProducts';

describe('상품 목록 필터링 테스트', () => {
  describe('카테고리 필터링 테스트', () => {
    it('전체 선택 시, 모든 상품 목록을 보여준다', async () => {
      const CATEGORY_LENGTH = CATEGORY_OPTIONS.filter((options) => !!options.value).length;
      const FILTERING: Filtering = { category: '', sort: 'price,asc' };

      const { result } = renderHook(() => {
        const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
        const { getFilteredProducts } = useFilteredProducts({
          fetch,
        });
        return { getFilteredProducts };
      });

      await waitFor(async () => {
        const response = await result.current.getFilteredProducts(FILTERING);

        expect(response).toBeDefined();
        if (!response) return;

        const categorySet = new Set(response.newProducts.map((product) => product.category));

        expect(categorySet.size).toBe(CATEGORY_LENGTH);
      });
    });

    it.each(CATEGORY_OPTIONS.slice(1))(
      '카테고리 선택 시, 해당 카테고리 상품만 보여준다. (선택한 카테고리 :%s)',
      async ({ value }) => {
        const FILTERING: Filtering = { category: value as Category, sort: 'price,asc' };

        const { result } = renderHook(() => {
          const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
          const { getFilteredProducts } = useFilteredProducts({
            fetch,
          });
          return { getFilteredProducts };
        });

        await waitFor(async () => {
          const response = await result.current.getFilteredProducts(FILTERING);

          expect(response).toBeDefined();
          if (!response) return;

          const isAllFashion = response.newProducts.every((product) => product.category === value);
          expect(isAllFashion).toBeTruthy();
        });
      },
    );
  });

  describe('가격 정렬 테스트', () => {
    it('오름차순 선택 시, 상품 각각의 오름차순으로 목록을 보여준다', async () => {
      const FILTERING: Filtering = { category: '', sort: 'price,asc' };

      const { result } = renderHook(() => {
        const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
        const { getFilteredProducts } = useFilteredProducts({
          fetch,
        });
        return { getFilteredProducts };
      });

      await waitFor(async () => {
        const response = await result.current.getFilteredProducts(FILTERING);

        expect(response).toBeDefined();
        if (!response) return;

        const [first, second] = response.newProducts;

        expect(first.price <= second.price).toBeTruthy();
      });
    });
    it('내림차순 선택 시, 상품 각겨의 내림차순으로 목록을 보여준다', async () => {
      const FILTERING: Filtering = { category: '', sort: 'price,desc' };

      const { result } = renderHook(() => {
        const { fetch } = useFetch<typeof fetchProduct>(fetchProduct);
        const { getFilteredProducts } = useFilteredProducts({
          fetch,
        });
        return { getFilteredProducts };
      });

      await waitFor(async () => {
        const response = await result.current.getFilteredProducts(FILTERING);

        expect(response).toBeDefined();
        if (!response) return;

        const [first, second] = response.newProducts;

        expect(first.price >= second.price).toBeTruthy();
      });
    });
  });
});
