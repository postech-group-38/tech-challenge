import { OrderStatus } from './order-status';
import { Product } from './product';
import { Customer } from './customer';
import { Payment } from './payment';
import { AssertionConcern } from '../common/assertion-concern';

export class Order extends AssertionConcern<Order> {
  readonly status = OrderStatus.RECEIVED;
  readonly products: Product[];
  readonly customer: Customer;
  readonly payment: Payment;
  readonly leadtime: Date;

  constructor(
    products: Product[],
    customer: Customer,
    payment: Payment,
    leadtime: Date,
  ) {
    super();
    this.products = products;
    this.customer = customer;
    this.payment = payment;
    this.leadtime = leadtime;
    this.validate();
  }

  equals(object: Order): boolean {
    throw new Error('Method not implemented.');
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
