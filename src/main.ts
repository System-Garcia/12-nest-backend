import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Habilitar que accesible desde orígenes diferentes al de tu aplicación

  app.useGlobalPipes(
    // Obligar a que la informacion venga como quiero o se rechaza
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
