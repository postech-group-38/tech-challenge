import { Order } from '../../model/order';

export interface OrderRepository {
  create(order: Order): Promise<string>;
}
