import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  async upload(file) {
    console.log(file);
    return {
      file: file.buffer.toString(),
    };
  }
}
