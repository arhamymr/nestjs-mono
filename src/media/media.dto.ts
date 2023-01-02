import { IsNotEmpty, IsEnum, IsString } from 'class-validator';

const acceptFile = ['jpeg', 'webp'];
export class DeleteMediaDto {
  @IsNotEmpty()
  @IsString()
  ref: string;
}

export class UploadMediaDto {
  @IsString()
  quality: number;

  @IsString()
  dir: string;

  @IsEnum(acceptFile, {
    message: 'please use this target extention :' + acceptFile.concat(','),
  })
  convert?: 'webp' | 'jpeg';
}
