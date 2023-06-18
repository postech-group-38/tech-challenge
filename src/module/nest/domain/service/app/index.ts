import { Module } from '@nestjs/common';
import { AppService } from 'src/domain/service/app';

@Module({
  imports: [],
  providers: [AppService],
  exports: [AppService],
})
export class AppServiceModule {}
