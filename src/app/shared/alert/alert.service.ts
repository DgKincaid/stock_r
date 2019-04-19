import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { filter } from 'rxjs/operators';

import { IAlert } from 'src/app/models/IAlert';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private dataChange$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient, private dbService: DbService) {
  }

  // TODO: Create alert model
  public add(alert: IAlert): void {
    if (alert !== undefined && alert !== null) {
      this.dbService.db.alerts
      .add({...alert})
      .then(async () => {
        const allItems = await this.getAll();
        console.log(allItems);
      })
      .catch(e => {
        console.warn('Error: ' + (e.stack || e));
      });
    }
  }

  public getAll() {
    return this.dbService.db.alerts.toArray();
  }

  public dataChanged(): Observable<any> {
    return this.dbService.dataChange$.asObservable().pipe(filter(data => data !== null));
  }
}
