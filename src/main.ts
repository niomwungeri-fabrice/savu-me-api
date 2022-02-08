import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {

  const PORT = 3001;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('SAVU-ME')
    .setDescription('The SAVU-ME API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  Logger.log(`Server Started on port ${PORT}`)
  await app.listen(PORT);
}
bootstrap();
