import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require("cors");

  //Session
  app.use(
    session({
      secret: 'FAHIM',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 360000, 
      }
    }),
  );

  //Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    
  }));
  
  ///Cors
  app.enableCors({
    origin: ['http://localhost:12000']
  });

  //Swagger
  const config = new DocumentBuilder()
  .setTitle('Template Market Place')
  .setDescription('API documentation of this project.')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  //Uploads
  // app.useStaticAssets('uploads', {prefix: '/uploads'}) 
  
  
  await app.listen(3000);
}
bootstrap();
