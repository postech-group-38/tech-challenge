import { PaymentMethod } from './payment-method';
import { AssertionConcern } from '../common/assertion-concern';
export class Payment extends AssertionConcern<Payment> {
  readonly name: PaymentMethod;
  constructor(name: PaymentMethod) {
    super();
    this.name = name;
    this.validate();
  }

  validate() {
    this.assertArgumentNotEmpty(
      this.name,
      'The Payment name must have some value.',
    );
  }
}
