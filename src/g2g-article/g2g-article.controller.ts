import { Body, Controller, Get, Param } from '@nestjs/common';
import { G2gArticleService } from './g2g-article.service';
import { ArticleDto } from './dto/g2g-article.dto';
@Controller('g2g-article')
export class G2gArticleController {
  constructor(private readonly g2gArticleService: G2gArticleService) {}

  @Get()
  findAll(@Body() payload: ArticleDto) {
    return this.g2gArticleService.findAll(payload);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.g2gArticleService.findOne(+id);
  }
}
