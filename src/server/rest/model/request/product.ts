import { Product } from '../../../../domain/model/product';
import { IsString } from 'class-validator';

export class ProductRequest {
  @IsString()
  name: string;

  toDomain() {
    return new Product(this.name);
  }
}
