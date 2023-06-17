import { APIModule } from './nest/server/rest/api/nest/module';
import { Module } from '@nestjs/common';

@Module({
  imports: [APIModule],
})
export class AppModule { }