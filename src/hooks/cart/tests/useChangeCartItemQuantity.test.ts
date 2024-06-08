import queryClientWrapper from '@src/testSetup/queryClientWrapper';
import { act, renderHook, waitFor } from '@testing-library/react';

import useChangeCartItemQuantity from '../useChangeCartItemQuantity';

describe('장바구니 목록 속 상품 수량 테스트', () => {
  const CART_ITEM_ID = 6;
  it.each([0, 1, 10])('장바구니 목록 속 상품의 수량을 변경할 수 있다. (수량:%s)', async (quantity) => {
    const { result } = renderHook(useChangeCartItemQuantity, { wrapper: queryClientWrapper });

    act(() => {
      result.current.mutateAsync({ cartItemId: CART_ITEM_ID, quantity });
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  });
});
