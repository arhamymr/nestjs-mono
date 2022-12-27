import { Injectable } from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;

  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyBkknpYpX0_7qMXUyOfr97XJsRAaiQLS_Q',
      authDomain: 'swiss-army-bc3a9.firebaseapp.com',
      projectId: 'swiss-army-bc3a9',
      storageBucket: 'swiss-army-bc3a9.appspot.com',
      messagingSenderId: '711905096290',
      appId: '1:711905096290:web:7ec8440e95ca7435af173b',
      measurementId: 'G-C53FY3VH73',
    });
  }
}

