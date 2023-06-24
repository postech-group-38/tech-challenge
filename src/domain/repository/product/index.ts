import { Product } from '../../model/product';
import { ProductFilter } from './filter';

export interface ProductRepository {
  create(product: Product): Promise<string>;
  find(filter: ProductFilter): Promise<Product[]>;
  count(filter: ProductFilter): Promise<number>;
  delete(id: string): Promise<void>;

}

export const ProductRepository = Symbol('OrderRepoProductRepositorysitory');
