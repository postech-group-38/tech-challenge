import { Module } from '@nestjs/common';
import { OrderCreateController } from '../../../../../../../server/rest/controller/nest/order/create';
import { OrderServiceModule } from '../../../../../domain/service/order/index';
import { OrderSearchController } from '../../../../../../../server/rest/controller/nest/order/search';

@Module({
  imports: [OrderServiceModule],
  controllers: [OrderCreateController, OrderSearchController],
  providers: [],
})
export class OrderControllerModule {}
