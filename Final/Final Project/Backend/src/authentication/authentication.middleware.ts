import { Injectable, NestMiddleware, Session, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.session['token']) {
      const token = req.session['token'];
      try {
        const user = jwt.verify(token, 'FAHIM');
        // If verification is successful, you can proceed
        next();
      } catch (error) {
        // Handle specific errors and provide custom messages
        res.json({ message: 'Invalid token. Or Session expired. Please check again.' });
      }
    }
    else {
      res.json({ message: 'You are not logged in. Please log in or sign up!!' });
    }
  }
}
