import { Module } from '@nestjs/common';
import { AppController } from 'src/server/rest/controller/nest/app/app.controller';
import { AppServiceModule } from 'src/modules/nest/domain/service/app/module';

@Module({
  imports: [AppServiceModule],
  controllers: [AppController],
  providers: [],
})
export class AppControllerModule {}