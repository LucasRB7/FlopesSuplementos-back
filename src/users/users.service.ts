import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo:Repository<UserEntity>
  ){}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto) ;
  }

  async findAll() {
    return await this.userRepo.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id,updateUserDto) ;
  }

  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
