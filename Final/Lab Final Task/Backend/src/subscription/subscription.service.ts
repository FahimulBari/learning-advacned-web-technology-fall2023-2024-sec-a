import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from 'src/entities/subscription.entity';
import { Repository } from 'typeorm';
import { SubscriptionDto } from './dto/subscription.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class SubscriptionService {

    constructor(
        @InjectRepository(Subscription) private subscriptionRepo: Repository<Subscription>,
        @InjectRepository(User) private userRepo: Repository<User>
    ){}
    
    async create(subscriptionDto: SubscriptionDto){
        const subscription = this.subscriptionRepo.create(subscriptionDto);
        await this.subscriptionRepo.save(subscription);

        return {
          message: 'New Subscription Added'
        };
      }

      async update(id: string, subscriptionDto: SubscriptionDto){
        const subscription = await this.subscriptionRepo.findOne({where: {id:id}});
        if (!subscription) {
            throw new NotFoundException('Subscription not found');
        }
        await this.subscriptionRepo.update(id,subscriptionDto);

        return {
          message: 'Subscription Has Been Updated'
        };
    }

    async Get(id: string) {
        const subscription = await this.subscriptionRepo.findOne({ where: { id } });
        if (!subscription) {
          throw new NotFoundException('Subscription not found');
        }
        return subscription;
      }
    
      async GetAll() {
        return await this.subscriptionRepo.find(); 
      }


    async delete(id: string) {
        const subscription = await this.subscriptionRepo.findOne({ where: { id } });
        if (!subscription) {
          throw new NotFoundException('Subscription not found');
        }
        await this.subscriptionRepo.delete(id);
        return {message: 'Subscription has been deleted'};
      }

      async FindUsers(id: string){
        const subscription = await this.subscriptionRepo.findOne({ where: { id } });
        if (!subscription) {
          throw new NotFoundException('Subscription not found');
        }

        const data = await this.subscriptionRepo.find({where: {id:id}, relations: ['users']}); //relation ['table name - always in small letters']
        return data[0].users;  
      }

      async GetOneByType(type: string) {
        return await this.subscriptionRepo.findOne({where: {type:type}});
      }

      async subscribe(subscriptionId: string, userId: string){

        const user = await this.userRepo.findOne({where: {id:userId}})
        if(!user){
            return 'User Not Found';
        }

        user.subscription  = await this.subscriptionRepo.findOne({ where: { id:subscriptionId } });
        user.type = user.subscription.type;
        await this.userRepo.update(userId,user);
        return {message: 'Subscription Successful'};
    }
}
