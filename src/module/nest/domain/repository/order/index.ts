import { Module } from '@nestjs/common';
import { OrderRepositoryMock } from 'src/domain/datastore/mock/order';

@Module({
  imports: [],
  providers: [OrderRepositoryMock],
  exports: [OrderRepositoryMock],
})
export class OrderRepositoryModule {}
