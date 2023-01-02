import { HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from 'src/firebase/storage.service';
import { SharpService } from './sharp.service';
import { IUpload } from './media.interface';
@Injectable()
export class MediaService {
  constructor(
    private storageService: StorageService,
    private sharpService: SharpService,
  ) {}

  async upload(file: Express.Multer.File, query: IUpload) {
    console.log(query);
    const { originalname, buffer } = file;

    const filename = originalname.split('.')[0] + '.webp';
    const ref = `assets/${filename}`;

    const metadata = {
      contentType: 'image/webp',
    };

    const convertFile = await this.sharpService.convertToWebP({
      buffer,
    });

    const url = await this.storageService.upload(convertFile, ref, metadata);

    return {
      ref,
      filename,
      url,
    };
  }

  async delete(refname: string) {
    try {
      await this.storageService.delete(refname);
      return {
        status: HttpStatus.OK,
        message: `${refname} Successfully deleted`,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
