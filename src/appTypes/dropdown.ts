import { Category, PriceSort } from './product';

export interface DropdownOption {
  label: string;
  value: PriceSort | Category;
}
