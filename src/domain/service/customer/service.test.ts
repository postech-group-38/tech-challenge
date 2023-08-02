import { Customer } from '../../model/customer';
import { CustomerService } from '.';
import { CustomerRepository } from '../../repository/customer';
import { CustomerRepositoryMock } from '../../repository/customer/mock';

describe('CustomerService', () => {
  let customerService: CustomerService;
  let customerRepository: CustomerRepository;

  beforeEach(() => {
    customerRepository = new CustomerRepositoryMock();
    customerService = new CustomerService(customerRepository);
  });

  describe('create', () => {
    it('should create a customer with a valid CPF', async () => {
      const validCustomer = new Customer('1', 'John Doe', '12345678900');
      const createdCustomer = await customerService.create(validCustomer);

      expect(createdCustomer).toEqual(validCustomer);
    });

    it('should throw an error for an invalid CPF', async () => {
      const invalidCustomer = new Customer('2', 'Jane Doe', '12345678901');

      await expect(
        customerService.create(invalidCustomer),
      ).rejects.toThrowError('Invalid CPF');
    });
  });
});
