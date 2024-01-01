import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create.admin.dto';
import { Subscription } from 'src/entities/subscription.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Subscription) private subscriptionRepo: Repository<Subscription>
  ){}

  async create(createUserDTO: CreateUserDto | CreateAdminDto){
  const user = this.userRepo.create(createUserDTO);  

  //Role
  if(user.role == null) user.role = 'user'; 

  //Subscription
  return await this.AutoSubscription(user);
  }

  async findAll() {
      return await this.userRepo.find(); 
  }

  async findOne(id:number){
    return await this.userRepo.findOne({where: {id:id}})
  }

  async findOneByEmail(email:string){
    return await this.userRepo.findOne({where: {email:email}})
  }

  async AutoSubscription(user : User) {

    try {
  
      let subscription;
  
      if(!user.type) {
        subscription = await this.subscriptionRepo.findOne({ where: {type: ILike('%free%') }});
      } else {
        subscription = await this.subscriptionRepo.findOne({ where: {type: user.type }}); 
      }
  
      if(!subscription) {
        throw new NotFoundException('Subscription not found');
      }
  
      // Rest of business logic
      user.type = subscription.type;
      user.subscription = subscription;

       
      await this.userRepo.save(user);
      return {
        message: 'User Has Been Created'
      }
  
    } catch(error) {
  
      if(error instanceof NotFoundException) {
        return {
          message: error.message
        };
      } else {
        return {
          message: 'Subscription not found'
        };
      }
  
    }
  
  }

}

