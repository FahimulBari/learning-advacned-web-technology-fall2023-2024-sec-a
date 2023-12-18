import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAdminStrategy, JwtUserStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: 'FAHIM', // JWT Token Setup
      signOptions: { expiresIn: '30m' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtUserStrategy, JwtAdminStrategy],
  exports: [AuthService]
})
export class AuthModule {}
