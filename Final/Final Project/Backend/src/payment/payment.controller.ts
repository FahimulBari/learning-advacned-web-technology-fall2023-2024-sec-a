import { Body, Controller, Get, Post, Put, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentMethodDto } from './dto/payment.method.dto';
import { JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(JwtUserAuthGuard)
  @Post('method/add')
  @UsePipes(ValidationPipe)
  AddMethod(@Body() paymentMethodDto:PaymentMethodDto,@Request() req){
    return this.paymentService.AddMethod(paymentMethodDto,req.user.id);
  }

  @UseGuards(JwtUserAuthGuard)
  @Put('method/update')
  @UsePipes(ValidationPipe)
  UpdateMethod(@Body() paymentMethodDto:PaymentMethodDto,@Request() req){
    return this.paymentService.UpdateMethod(paymentMethodDto,req.user.id);
  }

  
  @UseGuards(JwtUserAuthGuard)
  @Get('method/user')
  @UsePipes(ValidationPipe)
  GetMethodByUser(@Request() req){
    return this.paymentService.GetMethodByUser(req.user.id);
  }
}
