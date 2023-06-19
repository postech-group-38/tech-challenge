import { Module } from '@nestjs/common';
import { OrderControllerModule } from '../../controllers/nest/order/index';

@Module({
  imports: [OrderControllerModule],
})
export class APIModule {}
