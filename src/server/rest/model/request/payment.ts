import { Payment } from 'src/domain/model/payment';
import { PaymentMethod } from '../../../../domain/model/payment-method';
import { IsString } from 'class-validator';

export class PaymentRequest {
  @IsString()
  name: PaymentMethod;

  toDomain() {
    return new Payment(this.name);
  }
}
