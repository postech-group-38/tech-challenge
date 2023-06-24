import { Module } from '@nestjs/common';
import { ProductCreateController } from 'src/server/rest/controller/nest/product/create';
import { ProductServiceModule } from 'src/module/nest/domain/service/product';
import { ProductSearchController } from 'src/server/rest/controller/nest/product/search';
import { ProductDeleteController } from 'src/server/rest/controller/nest/product/delete';




@Module({
  imports: [ProductServiceModule],
  controllers: [ProductCreateController,ProductSearchController, ProductDeleteController],
  providers: [],
})
export class ProductControllerModule {}
