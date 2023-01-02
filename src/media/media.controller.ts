import {
  Controller,
  Delete,
  Post,
  Body,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { Express } from 'express';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteMediaDto, UploadMediaDto } from './media.dto';

@Controller('media')
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File, @Query() query: any) {
    console.log(query, 'query');
    return this.mediaService.upload(file, query);
  }

  @Delete('delete')
  async delete(@Body() body: DeleteMediaDto) {
    return this.mediaService.delete(body.ref);
  }
}
