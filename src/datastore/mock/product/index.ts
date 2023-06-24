import { Product } from '../../../domain/model/product';
import { ProductRepository } from 'src/domain/repository/product';
import { ProductFilter } from 'src/domain/repository/product/filter';

const mockedOrders = [
    new Product('product_a'),
    new Product('product_b'),
    new Product('product_c'),
];

export class ProductrepositoryMock implements ProductRepository {
  count(filter: ProductFilter): Promise<number> {
    return Promise.resolve(10);
  }

  find(filter: ProductFilter): Promise<Product[]> {
    return Promise.resolve(mockedOrders);
  }

  create(product: Product): Promise<string> {
    return Promise.resolve('12345');
  }
}
