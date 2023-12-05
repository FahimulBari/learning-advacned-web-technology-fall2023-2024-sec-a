import { Controller, Post, UseGuards, Request, Get, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService) {}

  //Login: Local Login & Receive JWT Token
  @UseGuards(LocalAuthGuard)
  @Post('login')
  Login(@Request() req): any{
    return this.authService.getJwtToken(req.user);
  }

  @Post('signup')
  @UsePipes(ValidationPipe)
  Signup(@Body() userDTO: CreateUserDto){
    return this.userService.create(userDTO);
  }

}
