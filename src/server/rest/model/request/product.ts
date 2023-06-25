import { Product } from '../../../../domain/model/product';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductRequest {
  @ApiProperty()
  @IsString()
  name: string;

  toDomain() {
    return new Product(this.name);
  }
}
