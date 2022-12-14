import { IsNumber } from 'class-validator';

export class ArticleDto {
  @IsNumber()
  page: number;

  @IsNumber()
  size: number;
}
