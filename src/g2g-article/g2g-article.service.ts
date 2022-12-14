import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ArticleDto } from './dto/g2g-article.dto';

@Injectable()
export class G2gArticleService {
  constructor(private prisma: PrismaService) { }

  async findAll(payload: ArticleDto) {
    const { page, size } = payload;
    const article = await this.prisma.article.findMany({
      skip: page === 1 ? 0 : page * size,
      take: size,
    });
    return {
      status: HttpStatus.OK,
      data: article,
      pagination: {
        page: page,
        size: size,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} g2gArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} g2gArticle`;
  }
}
