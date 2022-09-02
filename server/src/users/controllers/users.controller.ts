import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

// service
import { UsersService } from "./../services/users.service";
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}
  @Get()
  getUser(@Req() request: Request, @Res() response: Response) {
    const user =  this.userService.getUser()
    response.send("hello")
  }
  @Post()
  createUser() {
    return this.userService.createUser()
  }
}
