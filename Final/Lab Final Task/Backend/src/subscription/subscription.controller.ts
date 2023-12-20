import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDto } from './dto/subscription.dto';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  Create(@Body() subscriptionDTO: SubscriptionDto){
    return this.subscriptionService.create(subscriptionDTO);
  }

  @Put('update/:id')
  @UsePipes(ValidationPipe)
  Update(@Param('id') id:string,@Body() subscriptionDTO: SubscriptionDto){
    return this.subscriptionService.update(id,subscriptionDTO);
  }

  @Get('get/:id')
  GetOne(@Param('id') id:string)
  {
    return this.subscriptionService.Get(id);
  }

  @Get('all')
  GetAll()
  {
    return this.subscriptionService.GetAll();
  }

  @Delete('delete/:id')
  Delete(@Param('id') id:string)
  {
    return this.subscriptionService.delete(id);
  }

  @Get('user/:id')
  GetUsers(@Param('id') id:string){
    return this.subscriptionService.FindUsers(id);
  }

  @Get('subscribe/:id')
  welcomeUser(@Param('id') id:string,@Request() req){
    return this.subscriptionService.subscribe(id,req.user.id);
  }

}
