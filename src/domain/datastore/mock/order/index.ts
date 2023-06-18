import { Order } from 'src/domain/model/order';
import { OrderRepository } from 'src/domain/repository/order';

export class OrderRepositoryMock implements OrderRepository {
  create(order: Order): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
