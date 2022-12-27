import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IPostParams, IPostPayload } from './post.interfaces';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAllData(params: IPostParams) {
    const { page, size, search } = params;
    const article = await this.prisma.post.findMany({
      select: {
        title: true,
        author_id: true,
        content: true,
        // category: true,
        id: true,
      },
      where: {
        title: {
          search,
        },
        deleted: null,
      },
      skip: page === 1 ? 0 : page * size,
      take: size,
    });

    return article;
  }

  async findAll(params: IPostParams) {
    const { size, page } = params;

    const post = await this.findAllData(params);

    return {
      status: HttpStatus.OK,
      data: post,
      pagination: {
        page,
        size,
      },
    };
  }

  async findAllTrash(query) {
    const payload = {
      ...query,
    };
    const article = await this.findAllData(payload);

    return {
      status: HttpStatus.OK,
      data: article,
      pagination: {
        page: query.page,
        size: query.size,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} g2gArticle`;
  }

  async create(data: IPostPayload) {
    const post = await this.prisma.post.create({ data });

    return {
      status: HttpStatus.OK,
      data: post,
    };
  }

  async remove(id: number) {
    const deleted = await this.prisma.post.delete({ where: { id } });

    // remove soft-delete flag
    delete deleted.deleted;

    return {
      status: HttpStatus.OK,
      data: deleted,
      message: 'Succesfully delete article with id :' + id,
    };
  }
}
