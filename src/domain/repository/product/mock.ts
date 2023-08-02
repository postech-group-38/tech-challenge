import { Product } from '../../model/product';
import { ProductFilter } from './filter';
import { ProductRepository } from './index';

export class ProductRepositoryMock implements ProductRepository {
  create(product: Product): Promise<string> {
    throw new Error('Method not implemented.');
  }
  find(filter: ProductFilter): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  count(filter: ProductFilter): Promise<number> {
    throw new Error('Method not implemented.');
  }
  delete(product: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
