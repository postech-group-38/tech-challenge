import { Order } from 'src/domain/model/order';
import { OrderQueue } from '../../../../domain/queue/order/index';

export class OrderQueueMock implements OrderQueue {
  send(order: Order): Promise<void> {
    console.log('OrderQueueMock::send ' + order);
    return Promise.resolve();
  }
}
