import { NestFactory } from '@nestjs/core';
import setupDoc from './doc/swagger';
import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupDoc(app);

  await app.listen(8080);
}
bootstrap();
