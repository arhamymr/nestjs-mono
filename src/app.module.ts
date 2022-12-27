import { FirebaseModule } from './firebase/firebase.module';
import { KafkaModule } from './kafka/kafka.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { G2gArticleModule } from './post/post.module';
import { MediaModule } from './media/media.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    FirebaseModule,
    KafkaModule,
    ServeStaticModule.forRoot({
      renderPath: join(__dirname, '..', 'client'),
    }),
    AuthModule,
    PrismaModule,
    UsersModule,
    G2gArticleModule,
    MediaModule,
  ],
  controllers: [],
})
export class AppModule { }
