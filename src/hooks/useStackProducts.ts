import { fetchProduct } from '@apis/index';
import { Filtering, Product } from '@appTypes/index';
import { PRODUCT_LIST_PAGE } from '@src/constants';

interface UseStackProductsProps {
  fetch: (...args: Parameters<typeof fetchProduct>) => Promise<
    | Promise<{
        products: Product[];
        isLast: boolean;
      }>
    | undefined
  >;
}

export interface StackPrams {
  products: Product[];
  filtering: Filtering;
  isLastPage: boolean;
  page: number;
}

const useStackProducts = ({ fetch }: UseStackProductsProps) => {
  /**
   * 무한 스크롤 시 상품 목록을 추가해서 넣어주는 기능
   */
  const getStackedProducts = async ({ products, filtering, isLastPage, page }: StackPrams) => {
    if (isLastPage || !products.length) return;

    const newPage = page ? page + PRODUCT_LIST_PAGE.plus : PRODUCT_LIST_PAGE.second;
    const result = await fetch({ filtering, page: newPage });
    if (result === undefined) return;

    return {
      isLast: result.isLast,
      newProducts: [...products, ...result.products],
      newPage,
    };
  };

  return {
    getStackedProducts,
  };
};

export default useStackProducts;
