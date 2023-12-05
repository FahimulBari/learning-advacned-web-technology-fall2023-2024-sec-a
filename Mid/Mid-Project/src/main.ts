import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    
  }));
  
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

  //passport for session
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
