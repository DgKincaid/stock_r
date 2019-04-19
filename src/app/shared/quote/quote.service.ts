import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';

import { endpoint } from '../../configs/endpoints';
import { IStock } from 'src/app/models';


@Injectable({providedIn: 'root'})
export class QuoteService {

  constructor(private httpClient: HttpClient) {
  }

  public getQuote(stock: string): Observable<any> {
    return this.httpClient.get(`${endpoint.URL}/stock/${stock}/quote?token=${endpoint.TOKEN}`);
  }

  public getQuotes(stocks: Array<IStock>): Observable<any> {
    const temp = [];
    console.log(new Date());
    for(let stock of stocks) {

      temp.push(this.getQuote(stock.symbol));
    }

    return combineLatest(temp);
  }
}
