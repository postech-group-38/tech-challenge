import { Order } from './order';

describe('OrderService', () => {
  describe('domain:model:order', () => {
    it('should throw error when products is empty', () => {
      expect(() => new Order(null, null, null, null)).toThrowError(
        'The Order must have some product.',
      );
    });
  });
});
