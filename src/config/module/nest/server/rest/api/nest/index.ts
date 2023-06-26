import { Module } from '@nestjs/common';
import { OrderControllerModule } from '../../controllers/nest/order/index';
import { ProductControllerModule } from '../../controllers/nest/product';

@Module({
  imports: [OrderControllerModule, ProductControllerModule],
})
export class APIModule {}
