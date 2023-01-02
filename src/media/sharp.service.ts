import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { IUpload } from './media.interface';

@Injectable()
export class SharpService {
  async convert({ buffer, quality = 80, output }: IUpload) {
    switch (output) {
      case 'webp':
        return await sharp(buffer).webp({ lossless: true, quality }).toBuffer();
      case 'jpeg':
        return await sharp(buffer)
          .jpeg({
            quality: 100,
            chromaSubsampling: '4:4:4',
          })
          .toBuffer();
      default:
        console.log('this format not support yet');
        break;
    }
  }

  async resize(fileBuffer: Buffer, width: number, height: number) {
    const image = sharp(fileBuffer).resize({ width, height }).toBuffer();
    return image;
  }
}
