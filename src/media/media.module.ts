import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { StorageService } from 'src/firebase/storage.service';
import { SharpService } from './sharp.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService, StorageService, SharpService],
})
export class MediaModule {}
