import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { StorageService } from './storage.service';
import { ConfigModule } from '@nestjs/config';
@Module({
    providers: [FirebaseService, StorageService],
    exports: [FirebaseService, StorageService]
})
export class FirebaseModule { }
