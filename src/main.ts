import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { APIModule } from './modules/nest/server/rest/api/nest/module';

@Module({
  imports: [APIModule],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(8080);
}
bootstrap();
