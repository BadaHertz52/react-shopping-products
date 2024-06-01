import { fetchProduct } from '@src/apis';
import { Filtering, Product } from '@src/appTypes';
import { PRODUCT_LIST_PAGE } from '@src/constants';

interface UseFilteredProductsProps {
  fetch: (...args: Parameters<typeof fetchProduct>) => Promise<
    | Promise<{
        products: Product[];
        isLast: boolean;
      }>
    | undefined
  >;
}

const useFilteredProducts = ({ fetch }: UseFilteredProductsProps) => {
  /**
   * 필터링이 변했을 때 상품 목록을 가져오는 기능
   */
  const getFilteredProducts = async (filtering: Filtering) => {
    const result = await fetch({ filtering });
    if (result === undefined) return;

    return {
      isLast: result.isLast,
      newProducts: result.products,
      newPage: PRODUCT_LIST_PAGE.first,
    };
  };

  return {
    getFilteredProducts,
  };
};

export default useFilteredProducts;
