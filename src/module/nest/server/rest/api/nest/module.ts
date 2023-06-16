import { Module } from '@nestjs/common';
import { AppControllerModule } from '../../controllers/nest/app/module';

@Module({
  imports: [AppControllerModule],
})
export class APIModule {}