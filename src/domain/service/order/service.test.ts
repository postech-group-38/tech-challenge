import * as sinon from 'sinon';
import { Product } from '../../model/product';
import { OrderService } from '.';
import { Order } from '../../model/order';
import { OrderRepositoryMock } from '../../repository/order/mock';
import { OrderFilter } from '../../repository/order/filter';
import { Customer } from '../../model/customer';
import { Payment } from '../../model/payment';
import { PaymentMethod } from '../../model/payment-method';

describe('OrderService', () => {
  const repository = new OrderRepositoryMock();
  const service = new OrderService(repository);

  describe('create', () => {
    const sandbox = sinon.createSandbox();
    let repositoryStub: sinon.SinonStubbedInstance<OrderRepositoryMock>;

    beforeEach(() => {
      repositoryStub = sandbox.stub(repository);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call repository create and promise reject', async () => {
      const createSpy = repositoryStub.create.rejects({ message: 'test' });
      const order = new Order([new Product('Test')], null, null, null);

      expect.assertions(2);
      await expect(service.create(order)).rejects.toEqual({ message: 'test' });
      expect(createSpy.firstCall.args).toEqual([order]);
    });

    it('should call repository create and promise resolve', async () => {
      const createSpy = repositoryStub.create.resolves('order-id');
      const order = new Order([new Product('Test')], null, null, null);

      expect.assertions(2);
      await expect(service.create(order)).resolves.toEqual('order-id');
      expect(createSpy.firstCall.args).toEqual([order]);
    });
  });

  describe('search', () => {
    const sandbox = sinon.createSandbox();
    let repositoryStub: sinon.SinonStubbedInstance<OrderRepositoryMock>;

    beforeEach(() => {
      repositoryStub = sandbox.stub(repository);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call repository search and promise reject', async () => {
      const findSpy = repositoryStub.find.rejects({ message: 'test' });
      const filter = new OrderFilter('orderId_1', 'customerId_1');

      expect.assertions(2);
      await expect(service.search(filter)).rejects.toEqual({ message: 'test' });
      expect(findSpy.firstCall.args).toEqual([{ ...filter }]);
    });

    it('should call repository search and promise reject when call count', async () => {
      const expectedOrder = new Order(
        [new Product('product_a'), new Product('product_b')],
        new Customer('customer_a'),
        new Payment(PaymentMethod.MERCADO_PAGO),
      );
      const findSpy = repositoryStub.find.resolves([expectedOrder]);
      const countSpy = repositoryStub.count.rejects({ message: 'test' });
      const filter = new OrderFilter('orderId_1', 'customerId_1');

      expect.assertions(3);
      await expect(service.search(filter)).rejects.toEqual({ message: 'test' });
      expect(countSpy.firstCall.args).toEqual([{ ...filter }]);
      expect(findSpy.firstCall.args).toEqual([{ ...filter }]);
    });

    it('should call repository search and promise resolve', async () => {
      const expectedOrder = new Order(
        [new Product('product_a'), new Product('product_b')],
        new Customer('customer_a'),
        new Payment(PaymentMethod.MERCADO_PAGO),
      );
      const findSpy = repositoryStub.find.resolves([expectedOrder]);
      const countSpy = repositoryStub.count.resolves(10);
      const filter = new OrderFilter('orderId_1', 'customerId_1');

      expect.assertions(3);
      await expect(service.search(filter)).resolves.toEqual({
        items: [
          {
            customer: { name: 'customer_a' },
            leadtime: undefined,
            payment: { name: 'MERCADO_PAGO' },
            products: [{ name: 'product_a' }, { name: 'product_b' }],
            status: 'RECEIVED',
          },
        ],
        result: { limit: 10, offset: 0, total: 10 },
      });
      expect(countSpy.firstCall.args).toEqual([{ ...filter }]);
      expect(findSpy.firstCall.args).toEqual([{ ...filter }]);
    });
  });
});
