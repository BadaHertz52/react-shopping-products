import { Category, Filtering } from '@appTypes/index';
import { CATEGORY_OPTIONS } from '@constants/index';
import queryClientWrapper from '@src/testSetup/queryClientWrapper';
import { act, renderHook, waitFor } from '@testing-library/react';

import useGetProductList from '../useGetProductList';

describe('상품 목록 테스트', () => {
  describe('무한 스크롤 테스트', () => {
    it('첫번째 페이지에서 20개의 상품을 불러온다.', async () => {
      const EXPECTED_LENGTH = 20;
      const FILTERING: Filtering = {
        sort: 'price,asc',
        category: '',
      };
      const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

      await waitFor(() => expect(result.current.status).toBe('success'));

      await waitFor(() => {
        expect(result.current.products).toBeDefined();
      });

      expect(result.current.products?.length).toBe(EXPECTED_LENGTH);
    });

    it('다음 페이지에서는 4개의 상품을 추가로 불러온다. (총 개수:24)', async () => {
      const FIRST_PAGE_PRODUCT_LENGTH = 20;
      const PLUS_LENGTH = 4;
      const FILTERING: Filtering = {
        sort: 'price,asc',
        category: '',
      };
      const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

      await waitFor(() => {
        expect(result.current.status).toBe('success');
      });

      expect(result.current.products?.length).toBe(FIRST_PAGE_PRODUCT_LENGTH);

      act(() => {
        result.current.fetchNextPage();
      });

      await waitFor(() => {
        expect(result.current.status).toBe('success');
      });

      expect(result.current.products?.length).toBe(FIRST_PAGE_PRODUCT_LENGTH + PLUS_LENGTH);
    });
  });

  describe('필터링 테스트', () => {
    describe('카테고리 필터링 테스트', () => {
      it('전체 선택 시, 모든 상품 목록을 보여준다', async () => {
        const CATEGORY_LENGTH = CATEGORY_OPTIONS.filter((options) => !!options.value).length;
        const FILTERING: Filtering = { category: '', sort: 'price,asc' };

        const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

        await waitFor(() => expect(result.current.status).toBe('success'));

        await waitFor(() => {
          expect(result.current.products).toBeDefined();
        });

        const categorySet = new Set(result.current.products?.map((product) => product.category));

        expect(categorySet.size).toBe(CATEGORY_LENGTH);
      });

      it.each(CATEGORY_OPTIONS.slice(1))(
        '카테고리 선택 시, 해당 카테고리 상품만 보여준다. (선택한 카테고리 :%s)',
        async ({ value }) => {
          const FILTERING: Filtering = { category: value as Category, sort: 'price,asc' };

          const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

          await waitFor(() => expect(result.current.status).toBe('success'));

          await waitFor(() => {
            expect(result.current.products).toBeDefined();
          });

          const isAllFashion = result.current.products?.every((product) => product.category === value);
          expect(isAllFashion).toBeTruthy();
        },
      );
    });

    describe('가격 정렬 테스트', () => {
      it('오름차순 선택 시, 상품 각각의 오름차순으로 목록을 보여준다', async () => {
        const FILTERING: Filtering = { category: '', sort: 'price,asc' };

        const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

        await waitFor(() => expect(result.current.status).toBe('success'));

        await waitFor(() => {
          expect(result.current.products).toBeDefined();
        });

        if (!result.current.products) return;

        const [first, second] = result.current.products;

        expect(first.price <= second.price).toBeTruthy();
      });

      it('내림차순 선택 시, 상품 각겨의 내림차순으로 목록을 보여준다', async () => {
        const FILTERING: Filtering = { category: '', sort: 'price,asc' };

        const { result } = renderHook(() => useGetProductList(FILTERING), { wrapper: queryClientWrapper });

        await waitFor(() => expect(result.current.status).toBe('success'));

        await waitFor(() => {
          expect(result.current.products).toBeDefined();
        });

        if (!result.current.products) return;
        const [first, second] = result.current.products;

        expect(first.price >= second.price).toBeTruthy();
      });
    });
  });
});
