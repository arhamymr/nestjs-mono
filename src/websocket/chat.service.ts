import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
// import { IChat } from './chat.interfaces';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: any) {
    console.log(data, 'data');
    await this.prisma.chat.create({ data });
    return data;
  }
}
