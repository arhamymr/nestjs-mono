import { HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from 'src/firebase/storage.service';

@Injectable()
export class MediaService {
  constructor(private storageService: StorageService) { }
  async upload(file: Buffer, filename: string) {
    const uploaded = await this.storageService.upload(
      file,
      'assets/' + filename,
    );

    return {
      file: uploaded,
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
