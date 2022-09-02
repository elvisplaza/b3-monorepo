import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://dev:b9xGcJZTnKSe6oNG@cluster0.zrzoqgp.mongodb.net/test',
    // ),
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
    UsersModule,
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
