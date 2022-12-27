import { Body, Controller, Get } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaServices: KafkaService) {}

  @Get('producer')
  produce(@Body() body: any) {
    // this.kafkaServices.produce(body);
  }

  @Get('consumer')
  consumer() {
    // this.kafkaServices.consumer();
  }
}
