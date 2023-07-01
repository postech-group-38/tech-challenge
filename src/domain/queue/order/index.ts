import { Order } from '../../model/order';

export interface OrderQueue {
  send(order: Order): Promise<void>;
}

export const OrderQueue = Symbol('OrderQueue');
