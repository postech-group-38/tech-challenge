import { Module } from '@nestjs/common';
import { OrderController } from '../../../../../../../server/rest/controller/nest/order/order.controller';
import { OrderServiceModule } from '../../../../../domain/service/order/index';

@Module({
  imports: [OrderServiceModule],
  controllers: [OrderController],
  providers: [],
})
export class OrderControllerModule {}
