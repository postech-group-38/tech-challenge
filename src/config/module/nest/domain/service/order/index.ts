import { Module } from '@nestjs/common';
import { OrderRepositoryModule } from '../../repository/order';
import { OrderService } from 'src/domain/service/order';

@Module({
  imports: [OrderRepositoryModule],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderServiceModule {}
