import { Order } from '../../../../../domain/model/order';
import { ProductRequest } from './product';
import { CustomerRequest } from './customer';
import { PaymentRequest } from './payment';
import { IsArray, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Query } from './query';
import { OrderFilter } from '../../../../../domain/repository/order/filter';
import { ApiProperty } from '@nestjs/swagger';

export class OrderRequest {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductRequest)
  products: ProductRequest[];

  @ApiProperty()
  @IsObject({ always: false })
  @ValidateNested()
  @Type(() => CustomerRequest)
  customer: CustomerRequest;

  @ApiProperty()
  @IsObject({ always: false })
  @ValidateNested()
  @Type(() => PaymentRequest)
  payment: PaymentRequest;

  toDomain() {
    const products = [];
    if (this.products) {
      this.products.forEach((p) => products.push(p.toDomain()));
    }
    const customer = this.customer?.toDomain();
    const payment = this.payment?.toDomain();
    return new Order(products, customer, payment);
  }
}

export class OrderQuery extends Query {
  constructor(
    readonly status: string,
    readonly orderId: string,
    readonly customerId: string,
    offset: number,
    limit: number,
  ) {
    super(offset, limit);
  }

  toFilter() {
    return new OrderFilter(
      this.status,
      this.orderId,
      this.customerId,
      this.offset,
      this.limit,
    );
  }
}
