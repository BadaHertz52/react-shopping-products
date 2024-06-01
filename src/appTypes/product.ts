export type Category = '' | 'fashion' | 'beverage' | 'electronics' | 'kitchen' | 'fitness' | 'books';
export type PriceSort = 'price,asc' | 'price,desc';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: Category;
}

export interface Filtering {
  category: Category;
  sort: PriceSort;
}
