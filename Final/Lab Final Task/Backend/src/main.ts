import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

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
  app.use(cors()); 
  

  await app.listen(3000);
}
bootstrap();
