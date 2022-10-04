import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import AppDataSource from '../ormconfig';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';

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
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalGuards(new ApiKeyGuard());
  // ini gatau berguna kaga soalnya migrasinya gagal
  await AppDataSource.initialize();

  await app.listen(4000);
}
bootstrap();
