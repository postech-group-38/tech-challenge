import { Order } from 'src/domain/model/order';
import { OrderQueue } from './index';

export class OrderQueueMock implements OrderQueue {
  send(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
