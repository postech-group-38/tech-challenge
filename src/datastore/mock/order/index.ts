import { Customer } from 'src/domain/model/customer';
import { Order } from 'src/domain/model/order';
import { Payment } from 'src/domain/model/payment';
import { OrderRepository } from 'src/domain/repository/order';
import { OrderFilter } from 'src/domain/repository/order/filter';
import { Product } from '../../../domain/model/product';
import { PaymentMethod } from '../../../domain/model/payment-method';

const mockedOrders = [
  new Order(
    [new Product('product_a'), new Product('product_b')],
    new Customer('customer_a'),
    new Payment(PaymentMethod.MERCADO_PAGO),
  ),
  new Order(
    [new Product('product_b'), new Product('product_c')],
    new Customer('customer_b'),
    new Payment(PaymentMethod.MERCADO_PAGO),
  ),
  new Order(
    [new Product('product_c'), new Product('product_d')],
    new Customer('customer_c'),
    new Payment(PaymentMethod.MERCADO_PAGO),
  ),
];

export class OrderRepositoryMock implements OrderRepository {
  findById(orderId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  count(filter: OrderFilter): Promise<number> {
    console.log('OrderRepositoryMock::count', filter);
    return Promise.resolve(10);
  }

  find(filter: OrderFilter): Promise<Order[]> {
    console.log('OrderRepositoryMock::find', filter);
    return Promise.resolve(mockedOrders);
  }

  create(order: Order): Promise<string> {
    console.log('OrderRepositoryMock::create', order);
    return Promise.resolve('12345');
  }

  update(order: Order): Promise<void> {
    console.log('OrderRepositoryMock::update', order);
    return Promise.resolve();
  }
}
