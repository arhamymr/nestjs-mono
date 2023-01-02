import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService extends FirebaseService {
  public storage;

  constructor(public readonly configService: ConfigService) {
    super(configService);
    this.storage = getStorage(this.app);
  }

  async upload(file: Buffer, refname: string, metadata) {
    const uploadRef = await ref(this.storage, refname);
    try {
      await uploadBytes(uploadRef, file, metadata);
      const downloadURL = await getDownloadURL(uploadRef);
      return downloadURL;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(refname: string) {
    const deleteRef = await ref(this.storage, refname);
    try {
      const deleted = await deleteObject(deleteRef);
      return deleted;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
