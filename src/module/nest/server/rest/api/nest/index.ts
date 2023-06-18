import { Module } from '@nestjs/common';
import { AppControllerModule } from '../../controllers/nest/app';
import { OrderControllerModule } from '../../controllers/nest/order/index';

@Module({
  imports: [AppControllerModule, OrderControllerModule],
})
export class APIModule {}
