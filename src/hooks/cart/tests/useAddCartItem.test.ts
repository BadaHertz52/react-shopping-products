import queryClientWrapper from '@src/testSetup/queryClientWrapper';
import { act, renderHook, waitFor } from '@testing-library/react';

import useAddCartItem from '../useAddCartItem';

describe('장바구니 담기 테스트', () => {
  it('장바구니에 상품을 추가할 수 있다.', async () => {
    const PRODUCT_ID = 6;

    const { result } = renderHook(useAddCartItem, { wrapper: queryClientWrapper });

    act(() => {
      result.current.mutateAsync({ productId: PRODUCT_ID });
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  });
});
