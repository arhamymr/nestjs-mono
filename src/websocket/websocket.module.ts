import { Module } from '@nestjs/common';
import { EventsGateway } from './websocket.event';

@Module({
  providers: [EventsGateway],
})
export class WebsocketModule {}
