import { KafkaService } from './kafka.service';
import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.services';
import { ProducerService } from './producer.services';
import { KafkaController } from './kafka.controller';

@Module({
    exports: [ProducerService, ConsumerService],
    controllers: [KafkaController],
    providers: [KafkaService, ProducerService, ConsumerService],
})

export class KafkaModule { }
