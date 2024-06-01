import { CartItem, ApiResponse } from '@appTypes/index';
import { FIRST_LOAD_PRODUCTS_AMOUNT } from '@constants/index';
import { fetchWithToken } from '@utils/index';

import { END_POINTS } from './endPoints';

export async function fetchPostCartItems({ productId }: { productId: number }) {
  await fetchWithToken({
    url: `${END_POINTS.cartItems}`,
    method: 'POST',
    body: JSON.stringify({
      productId: productId,
      quantity: 1,
    }),
  });
}

export async function fetchGetCartItems(totalNumbers: number = FIRST_LOAD_PRODUCTS_AMOUNT) {
  const searchParams = new URLSearchParams({
    size: `${totalNumbers}`,
  });
  const data = await fetchWithToken({
    url: END_POINTS.cartItems + '?' + searchParams,
    method: 'GET',
  });

  const result = (await data.json()) as ApiResponse<CartItem[]>;

  return {
    totalNumbers: result.totalElements,
    cartItems: result.content,
  };
}

export async function fetchDeleteCartItems({ cartItemId }: { cartItemId: number }) {
  await fetchWithToken({
    url: `${END_POINTS.cartItems}/${cartItemId}`,
    method: 'DELETE',
  });
}
