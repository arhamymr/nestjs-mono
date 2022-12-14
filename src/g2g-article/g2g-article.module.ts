import { Module } from '@nestjs/common';
import { G2gArticleService } from './g2g-article.service';
import { G2gArticleController } from './g2g-article.controller';

@Module({
  controllers: [G2gArticleController],
  providers: [G2gArticleService],
})
export class G2gArticleModule {}
