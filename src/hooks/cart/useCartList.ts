import { fetchGetCartList } from '@apis/index';
import { QUERY_KEY, QUERY_TIME } from '@constants/index';
import { CartItem } from '@src/appTypes';
import { useQuery } from '@tanstack/react-query';

const useCartList = (refetchOnMount: boolean = false) => {
  const { staleTime } = QUERY_TIME.cartList;
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: [REACT_QUERY_KEY.cartList],
    queryFn: fetchGetCartList,
    refetchOnMount,
    staleTime,
  });

  const makeCartListMap = (cartList: CartItem[] | undefined) => {
    if (!cartList) return undefined;

    return new Map(cartList.map((item) => [item.product.id, item]));
  };

  return { error, isLoading, isSuccess, cartListMap: makeCartListMap(data?.cartList) };
};

export default useCartList;
