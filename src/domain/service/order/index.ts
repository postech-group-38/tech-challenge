import { Inject, Injectable } from '@nestjs/common';
import { Order } from '../../model/order';
import { OrderRepository } from '../../repository/order/index';
import { OrderFilter } from '../../repository/order/filter';
import { Page } from '../../common/page';

@Injectable()
export class OrderService {
  constructor(
    @Inject(OrderRepository) private readonly respository: OrderRepository,
  ) {}

  create(order: Order) {
    return this.respository.create(order);
  }

  async search(filter: OrderFilter) {
    const [total, orders] = await this.findWithTotal(filter);
    return new Page(orders, filter, total);
  }

  private findWithTotal(filter: OrderFilter) {
    return Promise.all([
      this.respository.count(filter),
      this.respository.find(filter),
    ]);
  }
}
