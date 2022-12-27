import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;

  constructor(public readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('FIREBASE_API_KEY');
    const authDomain = this.configService.get<string>('FIREBASE_AUTH_DOMAIN');
    const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
    const storageBucket = this.configService.get<string>(
      'FIREBASE_STORAGE_BUCKET',
    );
    const messagingSenderId = this.configService.get<string>(
      'FIREBASE_MESSAGING_SENDER_ID',
    );
    const appId = this.configService.get<string>('FIREBASE_APP_ID');
    const measurementId = this.configService.get<string>(
      'FIREBASE_MEASUREMENT_ID',
    );

    if (
      !apiKey ||
      !authDomain ||
      !projectId ||
      !storageBucket ||
      !messagingSenderId ||
      !measurementId) {
      throw new Error('Environment variables are missing');
    }

    this.app = initializeApp({
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    });
  }
}

