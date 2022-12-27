import { Injectable } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { ConfigService } from '@nestjs/config';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService extends FirebaseService {
  public storage;

  constructor(public readonly configService: ConfigService) {
    super(configService);
    this.storage = getStorage(this.app);
  }

  async upload(file: Buffer, refname: string) {
    const uploadRef = await ref(this.storage, refname);

    try {
      await uploadBytes(uploadRef, file);
      const downloadURL = await getDownloadURL(uploadRef);
      return downloadURL;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(refname: string) {
    const deleteRef = await ref(this.storage, refname);
    try {
      await deleteObject(deleteRef);
      return;
    } catch (error) {
      throw new Error(error)
    }
  }
}
