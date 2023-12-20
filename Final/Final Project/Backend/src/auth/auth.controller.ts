import { Controller, Post, UseGuards, Request, Get, Body, UsePipes, ValidationPipe, Session, Param} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { ApiTags } from '@nestjs/swagger';
import { DownloadService } from 'src/operations/download.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly downloadService: DownloadService) {}

  //Login: Local Login & Receive JWT Token
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async Login(@Request() req,@Session() session): Promise<any>{

    const JwtObj = await this.authService.getJwtToken(req.user);

    session.token = JwtObj.access_token;
    session.save();

    return session.token;
  }

  @Post('signup')
  @UsePipes(ValidationPipe)
  Signup(@Body() userDTO: CreateUserDto){
    return this.userService.create(userDTO);
  }

  @Get('logout')
  async Logout(@Session() session){
    await session.destroy();
    console.log(session);
    return 'You are logged out!';
  }

  @ApiTags('Download')
  @Post('download/:templateId')
  async downloadTemplate(@Session() session, @Param('templateId') templateId: string) {
    const userId = session.userId;
    return this.downloadService.downloadTemplate(userId, templateId);
  }

  @ApiTags('Download')
  @Get('download/history')
  async getDownloadHistory(@Session() session) {
    const userId = session.userId;
    return this.downloadService.getDownloadHistory(userId);
  }
}
