import { WebsocketModule } from './websocket/websocket.module';
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
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    WebsocketModule,
    FirebaseModule,
    KafkaModule,
    ServeStaticModule.forRoot({
      renderPath: join(__dirname, '..', 'client'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UsersModule,
    G2gArticleModule,
    MediaModule,
  ],
  controllers: [],
})
export class AppModule {}
