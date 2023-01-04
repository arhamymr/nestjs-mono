import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosError } from 'axios';
import { catchError, Observable, map } from 'rxjs';

@Injectable()
export class HttpClientService {
  constructor(private httpService: HttpService) {}

  getAllProduct(): Observable<AxiosResponse<any>> {
    const response = this.httpService
      .get('https://dummyjson.com/products')
      .pipe(map((res) => res.data))
      .pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened! :' + error;
        }),
      );
    console.log(response, 'response');
    return response;
  }
}
