import { OrderStatus } from './order-status';
import { Product } from './product';
import { Customer } from './customer';
import { Payment } from './payment';
import { AssertionConcern } from '../common/assertion-concern';

export class Order extends AssertionConcern<Order> {
  readonly status = OrderStatus.RECEIVED;

  constructor(
    readonly products: Product[],
    readonly customer: Customer,
    readonly payment: Payment,
    readonly leadtime?: Date,
  ) {
    super();
    this.validate();
  }

  validate() {
    this.validateProducts();
  }

  private validateProducts() {
    this.assertArrayNotEmpty(
      this.products,
      'The Order must have some product.',
    );
  }
}
