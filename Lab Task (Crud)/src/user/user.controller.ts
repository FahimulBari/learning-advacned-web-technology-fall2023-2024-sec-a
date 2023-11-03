import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}
    
    @Get('all')
    getAlluser(){
        //console.log(this.userService.getAll());
        return this.userService.getAll();
    }

    @Get('get/:id')
    GetUser(@Param('id') id: number){
        //return {user:{id: id}}
        return this.userService.get(id);
    }

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Put('update')
    UpdateUser(@Body() updateUserDto: CreateUserDto){
        return this.userService.update(updateUserDto);
    }

    @Delete('delete/:id')
    DeleteUser(@Param('id') id: number){
        return this.userService.delete(id);
    }
}
