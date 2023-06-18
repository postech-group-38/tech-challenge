import { Customer } from '../../../../domain/model/customer';
import { IsString } from 'class-validator';

export class CustomerRequest {
  @IsString()
  name: string;

  toDomain() {
    return new Customer(this.name);
  }
}
