import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteMediaDto {
  @IsNotEmpty()
  @IsString()
  ref: string;
}

export class UploadMediaDto {
  @IsString()
  quality: string;

  @IsString()
  dir: string;

  convert: 'webp';
}
