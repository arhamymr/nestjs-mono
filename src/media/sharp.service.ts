import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { IUpload } from './media.interface';

@Injectable()
export class SharpService {
  async convertToWebP({ buffer, quality = 80 }: IUpload) {
    const image = sharp(buffer).webp({ lossless: true, quality }).toBuffer();
    return image;
  }

  async resize(fileBuffer: Buffer, width: number, height: number) {
    const image = sharp(fileBuffer).resize({ width, height }).toBuffer();
    return image;
  }
}
