import * as sinon from 'sinon';
import { Product } from '../../model/product';
import { OrderService } from '.';
import { Order } from '../../model/order';
import { OrderRepositoryMock } from '../../repository/order/mock';

describe('OrderService', () => {
  const sandbox = sinon.createSandbox();

  const repository = new OrderRepositoryMock();
  const service = new OrderService(repository);

  describe('create', () => {
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
});
