import { MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import  config  from 'ormconfig';
import { AuthenticationMiddleware } from './authentication/authentication.middleware';
import { TemplateModule } from './template/template.module';
import { SearchModule } from './search/search.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config), 
    UserModule, 
    AuthModule, 
    ProfileModule, 
    TemplateModule, SearchModule, SubscriptionModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { path: 'user/*', method: RequestMethod.ALL },      
      { path: 'profile/*', method: RequestMethod.ALL },
      { path: 'search/*', method: RequestMethod.ALL },
      { path: 'template/*', method: RequestMethod.ALL },
      { path: 'subscription/*', method: RequestMethod.ALL },
      { path: 'payment/*', method: RequestMethod.ALL }
    );
  }

}
