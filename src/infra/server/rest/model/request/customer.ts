import { Customer } from '../../../../../domain/model/customer';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerRequest {
  @ApiProperty()
  @IsString()
  name: string;

  toDomain() {
    return new Customer(this.name);
  }
}
