import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';
import { Article } from 'src/articles/models/article.models';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: Types.ObjectId
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  email: string;
  @Prop({required: true})
  birthday: string;
  @Prop({required: true})
  password: string;
  @Prop()
  firebase_id: string;
  @Prop({type: [{type: Types.ObjectId, ref: 'Article'}]})
  articles: Article[]
}

export const UserSchema = SchemaFactory.createForClass(User);