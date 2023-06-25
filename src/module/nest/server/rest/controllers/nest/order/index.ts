import { Module } from '@nestjs/common';
import { OrderCreateController } from '../../../../../../../server/rest/controller/nest/order/create';
import { OrderServiceModule } from '../../../../../domain/service/order/index';
import { OrderSearchController } from '../../../../../../../server/rest/controller/nest/order/search';
import { OrderUpdateController } from '../../../../../../../server/rest/controller/nest/order/update';

@Module({
  imports: [OrderServiceModule],
  controllers: [
    OrderCreateController,
    OrderSearchController,
    OrderUpdateController,
  ],
  providers: [],
})
export class OrderControllerModule {}
