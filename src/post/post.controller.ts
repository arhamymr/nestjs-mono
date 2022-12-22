import {
  Query,
  Post,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { PostService } from './post.service';
import { PostDto } from './post.dto';

@Controller('post')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get()
  findAll(
    @Query('size', ParseIntPipe) size: number,
    @Query('page', ParseIntPipe) page: number,
    @Query('search') search: string,
  ) {
    return this.postService.findAll({ size, page, search });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }

  @Post('create')
  async create(@Body('') data: PostDto) {
    return this.postService.create(data);
  }
}
