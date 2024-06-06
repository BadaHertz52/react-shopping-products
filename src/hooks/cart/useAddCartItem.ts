import { fetchPostCartList } from '@src/apis';
import { QUERY_KEY } from '@src/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAddCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchPostCartList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.cartList] });
    },
    onError: (error, vairables) => {
      console.error(`${vairables.productId}에 대한 장바구니 담기 요청 실패: ${error.message}`);
    },
  });
};

export default useAddCartItem;
