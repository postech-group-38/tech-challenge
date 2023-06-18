import { NestFactory } from '@nestjs/core';
import setupOpenAPI from './config/open-api/swagger';
import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupOpenAPI(app);

  await app.listen(8080);
}
bootstrap();
