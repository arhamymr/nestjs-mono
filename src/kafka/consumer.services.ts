import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import {
  ConsumerRunConfig,
  Consumer,
  Kafka,
} from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092'],
  });

  private readonly consumers: Consumer[] = [];

  async consume(topic: string, config: ConsumerRunConfig) {
    try {
      const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' });
      await consumer.connect();
      await consumer.subscribe({ topic });
      await consumer.run(config);
      this.consumers.push(consumer);
    } catch (error) {
      console.log('kafka consumer: something wrong' + error)
    }
  }

  async onApplicationShutdown() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
