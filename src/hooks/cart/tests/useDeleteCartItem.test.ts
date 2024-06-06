import queryClientWrapper from '@src/testSetup/queryClientWrapper';
import { act, renderHook, waitFor } from '@testing-library/react';

import useDeleteCartItem from '../useDeleteCartItem';
describe('장바구니 빼기 테스트', () => {
  it('장바구니에 상품을 삭제할 수 있다.', async () => {
    const CART_ITEM_ID = 6;

    const { result } = renderHook(useDeleteCartItem, { wrapper: queryClientWrapper });

    act(() => {
      result.current.mutateAsync({ cartItemId: CART_ITEM_ID });
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  });
});
