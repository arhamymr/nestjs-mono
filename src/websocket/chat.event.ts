// import {
//   MessageBody,
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
//   WsResponse,
// } from '@nestjs/websockets';
// import { from, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Server } from 'socket.io';

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { ChatDto } from './chat.dto';
// import { IChat } from './chat.interfaces';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody() payload: ChatDto,
  ): Promise<WsResponse<any>> {
    return this.chatService.createMessage(payload);
  }
}
