import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';

// model
import { User, UserDocument } from "./../models/user.models";

@Injectable()
export class UsersService {
  // you put name because it's the name of the model
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  getUser(){
    response.send("hello")
  }
  createUser(): Promise<User>{
    const newUser = new this.userModel({})
    return newUser.save();
  }
}
