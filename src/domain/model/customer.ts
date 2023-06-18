import { AssertionConcern } from '../common/assertion-concern';
export class Customer extends AssertionConcern<Customer> {
  constructor(readonly name: string) {
    super();
    this.validate();
  }

  validate() {
    this.assertArgumentNotEmpty(
      this.name,
      'The Customer name must have some value.',
    );
  }
}
