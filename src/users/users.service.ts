import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
    });

    if (!users.length) {
      throw new NotFoundException();
    }

    return {
      data: users,
      message: 'succesfully get data',
    };
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return {
      status: HttpStatus.OK,
      message: 'Succesfully delete user with id :' + id,
    };
  }
}
