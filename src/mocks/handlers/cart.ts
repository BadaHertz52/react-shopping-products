import { CartItem } from '@appTypes/index';
import cartList from '@mocks/data/cartList.json';
import { makeServerResponse } from '@mocks/utils/serverResponse';
import { http, HttpResponse } from 'msw';

import { END_POINTS } from '../../apis/endPoints';

const cartHandler = [
  http.get(END_POINTS.cartItems, async () => {
    const response = makeServerResponse<CartItem[]>({
      page: 0,
      size: 10,
      content: cartList as CartItem[],
    });

    return HttpResponse.json(response, { status: 200 });
  }),
  http.post(END_POINTS.cartItems, async () => {
    return HttpResponse.json('success', { status: 201 });
  }),
  http.delete(`${END_POINTS.cartItems}/:cartItemId`, async () => {
    return HttpResponse.json('success');
  }),
  http.patch(`${END_POINTS.cartItems}/:cartItemId`, async () => {
    return HttpResponse.json('success', { status: 200 });
  }),
];

export default cartHandler;
