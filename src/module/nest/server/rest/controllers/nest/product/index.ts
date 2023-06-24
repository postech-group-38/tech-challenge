import { Module } from '@nestjs/common';
import { ProductCreateController } from 'src/server/rest/controller/nest/product/create';
import { ProductServiceModule } from 'src/module/nest/domain/service/product';




@Module({
  imports: [ProductServiceModule],
  controllers: [ProductCreateController],
  providers: [],
})
export class ProductControllerModule {}
