import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './../authentication/entities/user';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
