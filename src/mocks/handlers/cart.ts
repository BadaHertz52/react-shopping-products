import { CartItem } from '@appTypes/index';
import cartItems from '@mocks/data/cartItems.json';
import { makeServerResponse } from '@mocks/utils/serverResponse';
import { http, HttpResponse } from 'msw';

import { END_POINTS } from '../../apis/endPoints';

const cartHandler = [
  http.get(END_POINTS.cartItems, async () => {
    const response = makeServerResponse<CartItem[]>({
      page: 0,
      size: 10,
      content: cartItems as CartItem[],
    });

    return HttpResponse.json(response);
  }),
  http.post(END_POINTS.cartItems, async () => {
    return HttpResponse.json();
  }),
  http.delete(END_POINTS.cartItems, async () => {
    return HttpResponse.json();
  }),
];

export default cartHandler;
