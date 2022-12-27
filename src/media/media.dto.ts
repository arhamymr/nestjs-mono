import { IsNotEmpty, IsString } from 'class-validator';

export class MediaDto {
  @IsNotEmpty()
  @IsString()
  ref: string;
}
