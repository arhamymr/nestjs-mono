import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true, name: true },
    });

    if (!users.length) {
      throw new NotFoundException();
    }

    return {
      data: users,
      message: 'succesfully get data',
    };
  }

  async remove(id: number) {
    await this.prisma.user.delete({ where: { id } });
    return {
      status: HttpStatus.OK,
      message: 'Succesfully delete user with id :' + id,
    };
  }
}
