import { fetchPatchCartList } from '@src/apis';
import { QUERY_KEY } from '@src/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemQuantity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchPatchCartList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.cartList] });
    },
    onError: (error, vairables) => {
      console.error(`${vairables.cartItemId}에 대한 수량 변경 요청 실패: ${error.message}`);
    },
  });
};

export default useCartItemQuantity;
