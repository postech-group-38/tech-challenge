import { Order } from 'src/domain/model/order';
import { OrderFilter } from './filter';
import { OrderRepository } from './index';

export class OrderRepositoryMock implements OrderRepository {
  count(filter: OrderFilter): Promise<number> {
    throw new Error('Method not implemented.');
  }
  find(filter: OrderFilter): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
  create(order: Order): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
