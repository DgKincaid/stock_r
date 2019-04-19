import { Component, OnInit } from '@angular/core';
import { QuoteService, HistoricalService } from 'src/app/shared';
import { Observable } from 'rxjs';
import { IStock } from 'src/app/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  public stock$: Observable<IStock>;
  public historicalData$: Observable<any>;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute,
    private historicalService: HistoricalService, private alertsService: AlertService) { }

  ngOnInit() {

    const symbol$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          console.log(params);
          return params.getAll('symbol');
        })
    );

    this.stock$ = symbol$.pipe(
      switchMap(symbol => this.quoteService.getQuote(symbol))
    );

    this.stock$.subscribe(res => console.log(res));

    this.historicalData$ = symbol$.pipe(
      switchMap(symbol => this.historicalService.getHistoricalPrices('', symbol))
    );

    symbol$.subscribe(res => console.log(res));
    // this.historicalData$.subscribe(res => console.log(res));
  }

  public addAlert(stock): void {
    console.log(stock);

    this.alertsService.add(stock);
  }

}
