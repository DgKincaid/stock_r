import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, interval, combineLatest } from 'rxjs';

import { switchMap, filter, map, startWith } from 'rxjs/operators';

import { PortfolioService, QuoteService } from 'src/app/shared';
import { IStock } from 'src/app/models';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  @Output() public stockClick: EventEmitter<IStock> = new EventEmitter<IStock>();
  public portfolio$: Observable<any>;

  constructor(private portfolioService: PortfolioService, private quoteService: QuoteService) { }

  public ngOnInit() {

    this.portfolio$ = combineLatest(this.portfolioService.dataChanged()
      .pipe(
        filter(data => data !== null),
      ),
      interval(1000 * 60 * 60).pipe(startWith(0))
    ).pipe(
      map(combined => combined[0]),
      switchMap(portfolio => this.quoteService.getQuotes(portfolio))
    );


    this.portfolio$.subscribe(res => console.log(res));
  }
}
