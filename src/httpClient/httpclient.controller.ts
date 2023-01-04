import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpClientService } from './httpclient.service';
import { AxiosResponse } from 'axios';

@Controller('httpclient')
export class HttpClientController {
  constructor(private httpClientService: HttpClientService) {}

  @Get()
  getAll(): Observable<AxiosResponse<any>> {
    console.log('inside here');
    return this.httpClientService.getAllProduct();
  }
}
