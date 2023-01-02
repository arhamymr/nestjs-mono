import { HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from 'src/firebase/storage.service';
import { SharpService } from './sharp.service';
import { IQueryUpload, IConverter } from './media.interface';
@Injectable()
export class MediaService {
  constructor(
    private storageService: StorageService,
    private sharpService: SharpService,
  ) {}

  async refconverter({ output, dir, originalname }) {
    const name = `${originalname.split('.')[0]}.${output}`;
    return `${dir}/${name}`;
  }

  async convert({ file, dir, output }: IConverter) {
    const ref = await this.refconverter({
      output,
      dir,
      originalname: file.originalname,
    });

    const metadata = {
      contentType: `image/${output}`,
    };

    const updateFileObject = {
      originalname: file.originalname.split('.')[0] + `.${output}`,
    };

    return {
      metadata,
      ref,
      file: {
        ...file,
        ...updateFileObject,
        buffer: await this.sharpService.convert({
          buffer: file.buffer,
          output,
        }),
      },
    };
  }

  async upload(file: Express.Multer.File, query: IQueryUpload) {
    const { convert, dir } = query;
    const { originalname, buffer, mimetype } = file;

    // original file attrb
    let filename = originalname;
    let ref = `${dir}/${filename}`;
    let tempFile = buffer;
    let metadata = {
      contentType: mimetype,
    };

    if (convert) {
      const converted = await this.convert({
        file,
        dir,
        output: convert,
      });

      ref = converted.ref;
      metadata = converted.metadata;
      filename = converted.file.originalname;
      tempFile = converted.file.buffer;
    }

    const url = await this.storageService.upload(tempFile, ref, metadata);

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
