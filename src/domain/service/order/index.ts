import { Inject, Injectable } from '@nestjs/common';
import { Order } from '../../model/order';
import { OrderRepository } from '../../repository/order/index';
import { OrderFilter } from '../../repository/order/filter';
import { Page } from '../../common/page';
import * as log from '../../../log';

@Injectable()
export class OrderService {
  private readonly logger = log.fromContext(OrderService.name);
  constructor(
    @Inject(OrderRepository) private readonly respository: OrderRepository,
  ) {}

  async create(order: Order) {
    const createdId = await this.respository.create(order);
    this.logger.info(`The order with id ${createdId} was created`);
    return createdId;
  }

  async update(order: Order) {
    const currentOrder = await this.respository.findById(order.id);
    if (!currentOrder) {
      throw new Error(`Order ${order.id} not found`);
    }
    currentOrder.update(order);
    await this.respository.update(currentOrder);
    this.logger.info(
      `The order with id ${order.id} was updated` + currentOrder,
    );
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
