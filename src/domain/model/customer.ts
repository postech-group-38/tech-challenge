import { AssertionConcern } from '../common/assertion-concern';
export class Customer extends AssertionConcern<Customer> {
  constructor(readonly _id: string, readonly name: string) {
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
