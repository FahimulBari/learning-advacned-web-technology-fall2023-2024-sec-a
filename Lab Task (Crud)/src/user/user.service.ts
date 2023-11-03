import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {User} from './entities/user.model';

@Injectable()
export class UserService {
    users: User[] = [];
    create(createUserDto: CreateUserDto){
        //let userId = Math.random().toString();
        const newUser = new User(createUserDto.sName, createUserDto.sId, createUserDto.sEmail);
        this.users.push(newUser);
        return "New user created... ";
    }

    update(updatedUser: User) {
        const index = this.users.findIndex(user => user.sId === updatedUser.sId);
        if(index !== -1) {
          this.users[index] = updatedUser;
          return `Updated user with id ${updatedUser.sId}`;
        }
      
        return `No user found with id ${updatedUser.sId}`;
      }
    delete(userId: number) {
        this.users = this.users.filter(user => user.sId !== userId);
        return `Deleted user with id ${userId}`;
    }

    getAll(){
        return [...this.users];
    }

    get(id:number){
        const index = this.users.findIndex(user => user.sId === id);
        return [this.users[index]];
    }
}

