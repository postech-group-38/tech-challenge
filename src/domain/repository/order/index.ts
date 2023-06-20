import { Order } from '../../model/order';
import { OrderFilter } from './filter';

export interface OrderRepository {
  create(order: Order): Promise<string>;
  find(filter: OrderFilter): Promise<Order[]>;
  count(filter: OrderFilter): Promise<number>;
}

export const OrderRepository = Symbol('OrderRepository');
