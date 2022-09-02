import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';
import { User } from 'src/users/models/user.models';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  _id: Types.ObjectId
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop({type: Types.ObjectId, ref: "User" })
  author: User;
}

export const ArticleSchema = SchemaFactory.createForClass(Article)