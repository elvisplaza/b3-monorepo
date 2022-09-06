import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

// model
import { User, UserDocument } from "./../models/user.models";

@Injectable()
export class UsersService {
  // you put name because it's the name of the model
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  getUser(id: string){
    const user = this.userModel.findById(id);
    return user;
  }
  createUser(createUser: any): Promise<User>{
    const newUser = new this.userModel(createUser)
    return newUser.save();
  }
}
