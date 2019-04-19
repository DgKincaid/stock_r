import { Injectable } from '@angular/core';
import { IStock } from 'src/app/models';
import { BehaviorSubject, Observable } from 'rxjs';


import { filter } from 'rxjs/operators';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio: Array<IStock> = [];

  constructor(private dbService: DbService) {

    this.getAll().then(res => {
      this.dbService.dataChange$.next(res);
    });
  }

  public add(stock: IStock) {
    this.dbService.db.portfolio
      .add({ ...stock })
      .then(async () => {
        const allItems = await this.getAll();
        console.log('saved in db', allItems);
      })
      .catch(e => {
        console.warn('Error: ' + (e.stack || e));
      });
  }

  public getAll() {
    return this.dbService.db.portfolio.toArray();
  }

  public dataChanged(): Observable<any> {
    return this.dbService.dataChange$.asObservable().pipe(filter(data => data !== null));
  }
}
