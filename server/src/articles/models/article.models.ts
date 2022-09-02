import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

export type ArticleDocument = Article & Document;

export class Article {
  @Prop()
  _id: Types.ObjectId
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop([{type: SchemaTyp}])
  author: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article)