import { ChatService } from './chat.service';
import { Module } from '@nestjs/common';
import { EventsGateway } from './chat.event';

@Module({
  providers: [ChatService, EventsGateway],
})
export class WebsocketModule {}
