import { Controller, Get, Post, Req, Res, Param, Body } from '@nestjs/common';
import { Response, Request } from 'express';

// service
import { UsersService } from "./../services/users.service";
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}
  @Get(":id")
  getUserById(@Param('id')id: string, @Res() response: Response) {
    const user =  this.userService.getUser(id)
    console.log("response", response)
    response.send({username: "hello"})
  }
  @Post()
  createUser(@Body() userData: any) {
    return this.userService.createUser(userData)
  }
}
