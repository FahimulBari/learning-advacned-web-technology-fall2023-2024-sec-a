import { MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import  config  from 'ormconfig';
import { SubscriptionModule } from './subscription/subscription.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(config), 
    UserModule, 
    SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{
}
