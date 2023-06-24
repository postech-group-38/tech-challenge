import { Module } from '@nestjs/common';
import { ProductCreateController } from 'src/server/rest/controller/nest/product/create';
import { ProductServiceModule } from 'src/module/nest/domain/service/product';
import { ProductSearchController } from 'src/server/rest/controller/nest/product/search';




@Module({
  imports: [ProductServiceModule],
  controllers: [ProductCreateController,ProductSearchController],
  providers: [],
})
export class ProductControllerModule {}
