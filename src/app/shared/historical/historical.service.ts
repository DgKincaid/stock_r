import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { endpoint } from '../../configs/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  constructor(private httpClient: HttpClient) { }

  public getHistoricalPrices(time: string, symbol: string): Observable<any> {
    time = '1d';
    return this.httpClient.get(`${endpoint.URL}/stock/${symbol}/chart/${time}?token=${endpoint.TOKEN}`);
  }
}
