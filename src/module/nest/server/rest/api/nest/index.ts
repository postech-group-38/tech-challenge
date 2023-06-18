import { Module } from '@nestjs/common';
import { AppControllerModule } from '../../controllers/nest/app';

@Module({
  imports: [AppControllerModule],
})
export class APIModule {}
