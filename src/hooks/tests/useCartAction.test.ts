import { useCartAction, useCartItemIds } from '@hooks/index';
import { renderHook, waitFor } from '@testing-library/react';

describe('상품 장바구니 담기/빼기 테스트', () => {
  const PRODUCT_ID = 113;

  const { result } = renderHook(() => {
    const { refreshCartItemIds } = useCartItemIds();
    const { addCartItem, deleteCarItem, error } = useCartAction({ refreshCartItemIds });

    return { addCartItem, deleteCarItem, error };
  });

  describe('장바구니 담기 테스트', () => {
    it('장바구니에 담으면, 장바구니 목록에 상품이 추가된다.', async () => {
      const { addCartItem } = result.current;

      await waitFor(async () => {
        await addCartItem(PRODUCT_ID);
      });

      expect(result.current.error).toBeFalsy();
    });
  });

  describe('장바구니 빼기 테스트', () => {
    it('장바구니에서 빼면, 장바구니 목록에 상품이 삭제된다.', async () => {
      const { deleteCarItem } = result.current;

      await waitFor(async () => {
        await deleteCarItem(PRODUCT_ID);
      });

      expect(result.current.error).toBeFalsy();
    });
  });
});
