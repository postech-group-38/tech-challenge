import { Inject, Injectable } from '@nestjs/common';
import { Order } from '../../model/order';
import { Product } from 'src/domain/model/product';
import { OrderFilter } from '../../repository/order/filter';
import { Page } from '../../common/page';
import { ProductRepository } from 'src/domain/repository/product/index';
import { ProductFilter } from 'src/domain/repository/product/filter';


@Injectable()
export class ProductService {
  constructor(
    
    @Inject(ProductRepository) private readonly respository : ProductRepository

  ) {}

  create(product: Product) {
    return this.respository.create(product);
  }

  async search(filter: ProductFilter) {
    const [total, products] = await this.findWithTotal(filter);
    return new Page(products, filter, total);
  }

  private findWithTotal(filter: ProductFilter) {
    return Promise.all([
      this.respository.count(filter),
      this.respository.find(filter),
    ]);
  }
}
