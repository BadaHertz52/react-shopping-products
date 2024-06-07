import { fetchProductList, FetchProductListReturnType } from '@src/apis';
import { Filtering, Product } from '@src/appTypes';
import { PRODUCT_LIST_PAGE, QUERY_KEY } from '@src/constants';
import { QueryFunction, QueryKey, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const useProductList = (filtering: Filtering) => {
  const queryClient = useQueryClient();

  const queryKey = [QUERY_KEY.productList, filtering];
  const queryFn: QueryFunction<FetchProductListReturnType, QueryKey, unknown> = async ({ pageParam = 0 }) =>
    fetchProductList({ filtering, page: pageParam as number });

  const { data, fetchNextPage, error, refetch, status } = useInfiniteQuery<FetchProductListReturnType, Error>({
    queryKey: queryKey,
    queryFn: queryFn,
    initialPageParam: PRODUCT_LIST_PAGE.first,
    getNextPageParam: (params: FetchProductListReturnType | undefined) => {
      if (!params) return;
      const { isLast, currentPage } = params;

      if (isLast) return;

      return currentPage === PRODUCT_LIST_PAGE.first ? PRODUCT_LIST_PAGE.second : currentPage + 1;
    },
  });

  const handleReset = () => {
    queryClient.setQueryData([QUERY_KEY.productList, filtering], () => ({
      pages: [],
      pageParams: [PRODUCT_LIST_PAGE.first],
    }));
    refetch();
  };

  const makeProducts = () => {
    if (!data?.pages[0]) return;

    return data.pages.reduce((acc, cur) => acc.concat(cur.products), [] as Product[]);
  };

  useEffect(() => {
    handleReset();
  }, [filtering]);

  return {
    products: makeProducts(),
    fetchNextPage,
    status,
    error,
  };
};
export default useProductList;
