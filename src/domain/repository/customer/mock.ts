import { Customer } from 'src/domain/model/customer';
import { CustomerFilter } from './filter';
import { CustomerRepository } from './index';

export class CustomerRepositoryMock implements CustomerRepository {
  update(Customer: Customer): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  create(Customer: Customer): Promise<string> {
    throw new Error('Method not implemented.');
  }
  find(filter: CustomerFilter): Promise<Customer[]> {
    throw new Error('Method not implemented.');
  }
  findById(CustomerId: string): Promise<Customer> {
    throw new Error('Method not implemented.');
  }
  count(filter: CustomerFilter): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
