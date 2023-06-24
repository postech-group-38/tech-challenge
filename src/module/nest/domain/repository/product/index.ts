import { Module } from '@nestjs/common';
import { ProductrepositoryMock } from 'src/datastore/mock/product';
import { ProductRepository } from 'src/domain/repository/product';

const provider = {
  provide: ProductRepository,
  useClass: ProductrepositoryMock,
};

@Module({
  imports: [],
  providers: [provider],
  exports: [provider],
})
export class ProductRepositoryModule {}
