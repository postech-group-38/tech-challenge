import { Module } from '@nestjs/common';
import { OrderRepositoryMock } from 'src/datastore/mock/order';
import { OrderRepository } from '../../../../../domain/repository/order';

const provider = {
  provide: OrderRepository,
  useClass: OrderRepositoryMock,
};

@Module({
  imports: [],
  providers: [provider],
  exports: [provider],
})
export class OrderRepositoryModule {}
