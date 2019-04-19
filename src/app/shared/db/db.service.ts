import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public dataChange$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public db;

  constructor() {
    this.db = new Dexie('stock-r');
    this.db.version(1).stores({
      portfolio: 'symbol,name,currency,date,exchange,iexId,isEnabled,region,type',
      alerts: '++id,symbol,priceWatch,currentPrice'
    });
  }
}
