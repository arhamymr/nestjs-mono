import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpClientController } from './httpclient.controller';
import { HttpClientService } from './httpclient.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [HttpClientController],
  providers: [HttpClientService],
})
export class HttpClientModule {}
