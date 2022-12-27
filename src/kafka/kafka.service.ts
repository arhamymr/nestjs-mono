import { Injectable } from '@nestjs/common';
import { ConsumerService } from './consumer.services';
import { ProducerService } from './producer.services';

@Injectable()
export class KafkaService {
  constructor(
    private readonly producerServices: ProducerService,
    private readonly consumerServices: ConsumerService) { }

  async produce(data: string | any) {

    await this.producerServices.produce({
      topic: 'test',
      messages: [{
        value: data,
      },
      ],
    });

    return {
      message: "Data send",
      data,
    }
  }

  async consumer() {
    try {
      await this.consumerServices.consume('test', {
        eachMessage: async ({ topic, partition, message }) => {
          console.log(
            {
              value: message.value.toString(),
              topic: topic.toString(),
              partition: partition.toString(),
            }
          )
        }
      }
      )
    } catch (error) {
      console.log('kafka send: something wrong' + error)
    }
  }
}
