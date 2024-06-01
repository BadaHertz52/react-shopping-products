import { DropdownOption } from '@appTypes/dropdown';

export const CATEGORY_OPTIONS: DropdownOption[] = [
  {
    label: '전체',
    value: '',
  },
  {
    label: '패션의류/잡화',
    value: 'fashion',
  },
  {
    label: '음료',
    value: 'beverage',
  },
  {
    label: '가전 디지털',
    value: 'electronics',
  },
  {
    label: '주방용품',
    value: 'kitchen',
  },
  {
    label: '운동',
    value: 'fitness',
  },
  {
    label: '도서',
    value: 'books',
  },
];

export const PRICE_SORT_OPTIONS: DropdownOption[] = [
  {
    label: '낮은 가격순',
    value: 'price,asc',
  },
  {
    label: '높은 가격순',
    value: 'price,desc',
  },
];

export const FIRST_LOAD_PRODUCTS_AMOUNT = 20;

export const LOAD_MORE_PRODUCTS_AMOUNT = 4;

export const PRODUCT_LIST_PAGE = {
  first: 0,
  second: 5,
  plus: 1,
};
