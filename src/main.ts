import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SuperDatabase } from './server-side/super-database';
import { SuperDatabaseModule } from './user-side/modules/database-module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen(3000);
}
bootstrap();
