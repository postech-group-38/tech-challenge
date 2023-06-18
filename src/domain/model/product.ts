import { AssertionConcern } from '../common/assertion-concern';

export class Product extends AssertionConcern<Product> {
  readonly name: string;
  constructor(name: string) {
    super();
    this.name = name;
    this.validate();
  }

  validate() {
    this.assertArgumentNotEmpty(
      this.name,
      'The product name must have some value.',
    );
  }
}
