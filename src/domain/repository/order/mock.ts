import { Order } from 'src/domain/model/order';
import { OrderRepository } from './index';

export class OrderRepositoryMock implements OrderRepository {
  create(order: Order): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
