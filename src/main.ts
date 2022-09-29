import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // invalid ketika request body tidak ada di dtosss
      forbidNonWhitelisted: true,
      // untuk mengubah primitive tipe data request body
      // dan request parameter
      transform: true,
    }),
  );
  await app.listen(4000);
}
bootstrap();
