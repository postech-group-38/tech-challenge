import { Order } from '../../model/order';
import { OrderRepository } from '../../repository/order/index';

export class OrderService {
  private respository: OrderRepository;
  constructor(r: OrderRepository) {
    this.respository = r;
  }

  public async create(order: Order): Promise<string> {
    return this.respository.create(order);
  }
}
