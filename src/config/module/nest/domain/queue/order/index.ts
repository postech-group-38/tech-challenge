import { Module } from '@nestjs/common';
import { OrderQueueMock } from 'src/infra/queue/mock/order';
import { OrderQueue } from '../../../../../../domain/queue/order';

const provider = {
  provide: OrderQueue,
  useClass: OrderQueueMock,
};

@Module({
  imports: [],
  providers: [provider],
  exports: [provider],
})
export class OrderQueueModule {}
