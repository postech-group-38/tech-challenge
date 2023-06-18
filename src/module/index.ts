import { APIModule } from './nest/server/rest/api/nest';
import { Module } from '@nestjs/common';
import { OrderServiceModule } from './nest/domain/service/order';

@Module({
  imports: [APIModule, OrderServiceModule],
})
export class AppModule {}
