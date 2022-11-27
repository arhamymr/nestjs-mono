import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('example middleware');
    next();
  }
}
