import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { G2gArticleModule } from './g2g-article/g2g-article.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, G2gArticleModule],
  controllers: [],
})
export class AppModule {}
