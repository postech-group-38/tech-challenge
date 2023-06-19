import { Inject, Injectable } from '@nestjs/common';
import { Order } from '../../model/order';
import { OrderRepository } from '../../repository/order/index';

@Injectable()
export class OrderService {
  constructor(
    @Inject(OrderRepository) private readonly respository: OrderRepository,
  ) {}

  public async create(order: Order): Promise<string> {
    return this.respository.create(order);
  }
}
