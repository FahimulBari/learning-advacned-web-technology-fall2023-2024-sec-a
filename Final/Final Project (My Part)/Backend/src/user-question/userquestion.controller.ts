import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes,ValidationPipe, UseGuards, Req, Session, Request} from '@nestjs/common';
import { UserquestionService } from './userquestion.service';
import { CreateUserQuestionDto } from './dto/create-user-question.dto';
import { UpdateUserQuestionDto } from './dto/update-user-question.dto';
import { JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('userquestion')
@UseGuards(JwtUserAuthGuard)
export class UserquestionController {
  constructor(private readonly userquestionService: UserquestionService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  create(@Body() createUserQuestionDto: CreateUserQuestionDto,@Request() req) {
    const userId = req.user.id; // Get user ID from the session
    console.log(userId);
    return this.userquestionService.create(createUserQuestionDto,userId);
  }

  @Get('seeall')
  findAll(@Request() req) {
    const userId = req.user.id;
      return this.userquestionService.findAllByUser(userId);
  }

  @Get('find/:id')
  findOne(@Param('id') id: number, @Request() req) {
    const userId = req.user.id;
      return this.userquestionService.findOneByUser(id, userId);
  }

  @Get('count/totalquestions')
  async countTotalQuestions(@Request() req) {
      const userId = req.user.id;
      const totalQuestions = await this.userquestionService.countTotalQuestionsByUser(userId);
      return `The total questions you created are: ${totalQuestions}`;
  }

  @Put('update/:id')
@UsePipes(ValidationPipe)
update(@Param('id') id: number, @Body() updateUserQuestionDto: UpdateUserQuestionDto, @Request() req) {
    const userId = req.user.id;
    return this.userquestionService.update(id, updateUserQuestionDto, userId);
}

  // @Delete('delete/:id')
  // delete(@Param('id') id: number,@Session() session) {
  //   return this.userquestionService.delete(id);
  // }

  // @Get('count/totalquestions')
  // async countTotalFaqs(@Session() session) {
  //   const totalFaqs = await this.userquestionService.countTotalQuestions();
  //   return `The total  faqs are: ${totalFaqs}`;
  // }
}
