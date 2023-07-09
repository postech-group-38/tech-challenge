import { Module } from '@nestjs/common';
import { CustomerService } from 'src/domain/service/customer';
import { CustomerRepositoryModule } from '../../repository/customer';

@Module({
  imports: [CustomerRepositoryModule],
  exports: [CustomerService],
  providers: [CustomerService],
})
export class CustomerServiceModule {}
