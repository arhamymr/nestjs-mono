import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
