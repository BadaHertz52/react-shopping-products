import { END_POINTS } from '@apis/endPoints';
import { Category, PriceSort, Product } from '@appTypes/index';
import products from '@mocks/data/products.json';
import { makeServerResponse } from '@mocks/utils/serverResponse';
import { FIRST_LOAD_PRODUCTS_AMOUNT, LOAD_MORE_PRODUCTS_AMOUNT, PRODUCT_LIST_PAGE } from '@src/constants';
import { http, HttpResponse } from 'msw';

const filterProducts = (category: Category | null, products: Product[]) => {
  if (!category) return products;

  return products.filter((product) => product.category === category);
};

const sortProducts = (sort: PriceSort | null, products: Product[]) => {
  if (sort === 'price,asc' || !sort) {
    return products.sort((prev, cur) => prev.price - cur.price);
  }
  return products.sort((prev, cur) => cur.price - prev.price);
};

const productsHandler = [
  http.get(END_POINTS.products, async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page'));
    const size = Number(url.searchParams.get('size'));
    const category = url.searchParams.get('category') as Category | null;
    const sort = url.searchParams.get('sort') as PriceSort | null;

    const filteredProducts = filterProducts(category, products as Product[]);
    const sortedProducts = sortProducts(sort, filteredProducts);
    const { first, second } = PRODUCT_LIST_PAGE;
    const limit = page === first ? FIRST_LOAD_PRODUCTS_AMOUNT : LOAD_MORE_PRODUCTS_AMOUNT;
    const start = page === first ? 0 : (page - second) * LOAD_MORE_PRODUCTS_AMOUNT + FIRST_LOAD_PRODUCTS_AMOUNT;
    const end = start + limit;

    const response = makeServerResponse<Product[]>({
      page: Number(page),
      size: Number(size),
      content: sortedProducts.slice(start, end),
    });

    return HttpResponse.json(response);
  }),
];

export default productsHandler;
