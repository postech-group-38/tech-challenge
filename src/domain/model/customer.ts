import { AssertionConcern } from '../common/assertion-concern';
export class Customer extends AssertionConcern<Customer> {
  readonly name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.validate();
  }

  validate() {
    this.assertArgumentNotEmpty(
      this.name,
      'The Customer name must have some value.',
    );
  }
}
