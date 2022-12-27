import { HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from 'src/firebase/storage.service';

@Injectable()
export class MediaService {
  constructor(private storageService: StorageService) { }

  async upload(file: Buffer, filename: string) {
    const ref = 'assets/' + filename;
    const uploaded = await this.storageService.upload(file, ref);

    return {
      ref,
      filename,
      url: uploaded,
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
