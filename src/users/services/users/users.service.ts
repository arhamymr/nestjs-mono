import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  fetchUsers() {
    return this.userRepository.find();
  }

  createUser(userData: CreateUserDto) {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async fetchUserById(id: number) {
    const result = await this.userRepository.findBy({ id });
    if (!!result.length) return result;
    throw new HttpException('data not found', HttpStatus.NOT_FOUND);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
