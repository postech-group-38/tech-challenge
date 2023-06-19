import { AssertionConcern } from '../common/assertion-concern';

export class Product extends AssertionConcern<Product> {
  constructor(readonly name: string) {
    super();
    this.validate();
  }

  validate() {
    this.assertArgumentNotEmpty(
      this.name,
      'The product name must have some value.',
    );
  }
}
