import {
  NestModule,
  Module,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
  }
}
