import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { endpoint } from '../../configs/endpoints';
import { take } from 'rxjs/operators';
import { IStock } from 'src/app/models';

@Injectable({providedIn: 'root'})
export class SearchService {

  private symbols: Array<IStock> = [];

  constructor(private httpClient: HttpClient) {
    this.getSymbols().pipe(take(1)).subscribe((symbols: IStock[]) => {
      this.symbols = symbols;
    });
  }

  public getSymbols() {
    return this.httpClient.get(`${endpoint.URL}/ref-data/symbols?token=${endpoint.TOKEN}`);
  }

  public search(symbol) {
    console.log(this.symbols);
    return of(this.symbols.filter(element => element.symbol.startsWith(symbol.toUpperCase())));
  }
}
