import { Query } from './query';
import { Product } from '../../../../domain/model/product';
import { IsString } from 'class-validator';
import { ProductFilter } from 'src/domain/repository/product/filter';

export class ProductRequest {
  @IsString()
  name: string;

  toDomain() {
    return new Product(this.name);
  }
}

export class ProductQuery extends Query {
  constructor(
    readonly name: string,
    offset: number,
    limit: number,
  ) {
    super(offset, limit);
  }

  toFilter() {
    return new ProductFilter(
      this.name,
    );
  }
}