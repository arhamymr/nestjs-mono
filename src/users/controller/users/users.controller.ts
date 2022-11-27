import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(
    @Param('id') idString: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.fetchUserById(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
