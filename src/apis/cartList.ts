import { ApiResponse, CartItem } from '@appTypes/index';
import { fetchWithToken } from '@utils/index';

import { END_POINTS } from './endPoints';

export async function fetchPostCartList({ productId }: { productId: number }) {
  await fetchWithToken({
    url: `${END_POINTS.cartItems}`,
    method: 'POST',
    body: JSON.stringify({
      productId: productId,
      quantity: 1,
    }),
  });
}

/**
 * size 옵션을 사용해, 장바구니 목록 데이터를 불러오는 함수
 */
async function fetchCartItemsData(size?: number): Promise<ApiResponse<CartItem[]>> {
  const searchParams = new URLSearchParams();

  if (size) {
    searchParams.set('size', size.toString());
  }

  const response = await fetchWithToken({
    url: END_POINTS.cartItems + '?' + searchParams,
    method: 'GET',
  });

  return response.json();
}

/**
 * 장바구니에 담긴 모든 상품 데이터를 가져오는 함수
 * @returns 장바구니 목록
 */
export async function fetchGetCartList() {
  const firstResult = await fetchCartItemsData();

  if (firstResult.totalElements === firstResult.content.length) {
    return {
      cartList: firstResult.content,
    };
  }

  const result = await fetchCartItemsData(firstResult.totalElements);

  return {
    cartList: result.content,
  };
}

export async function fetchDeleteCartList({ cartItemId }: { cartItemId: number }) {
  await fetchWithToken({
    url: `${END_POINTS.cartItems}/${cartItemId}`,
    method: 'DELETE',
  });
}

export async function fetchPatchCartList({ cartItemId, quantity }: { cartItemId: number; quantity: number }) {
  await fetchWithToken({
    url: `${END_POINTS.cartItems}/${cartItemId}`,
    method: 'PATCH',
    body: JSON.stringify({
      quantity: quantity,
    }),
  });
}
