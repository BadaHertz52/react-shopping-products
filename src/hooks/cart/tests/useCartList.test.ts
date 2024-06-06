import cartList from '@mocks/data/cartList.json';
import queryClientWrapper from '@src/testSetup/queryClientWrapper';
import { renderHook, waitFor } from '@testing-library/react';

import useCartList from '../useCartList';

describe('장바구니 목록 불러오기 테스트', () => {
  it('장바구니 목록을 가져올 수 있다.', async () => {
    const { result } = renderHook(useCartList, { wrapper: queryClientWrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const { cartListMap } = result.current;

    // 장바구니 목록 확인
    expect(cartListMap).toBeDefined();
    expect(cartListMap?.size).toEqual(cartList.length);
  });
});
