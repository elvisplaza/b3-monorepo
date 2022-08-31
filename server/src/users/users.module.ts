import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { ServicesService } from './services/services.service';

@Module({
  controllers: [UsersController],
  providers: [ServicesService],
})
export class UsersModule {}
