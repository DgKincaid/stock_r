import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/search/search.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap, filter } from 'rxjs/operators';

import { PortfolioService } from 'src/app/shared/portfolio/portfolio.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {

  public symbols$: Observable<any>;

  public form: FormGroup;

  constructor(private search: SearchService, private fb: FormBuilder, private portfolioService: PortfolioService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      input: null
    });

    this.symbols$ = this.form
      .get('input')
      .valueChanges
      .pipe(
        debounceTime(500),
        filter(value => typeof value.toUpperCase === 'function'),
        switchMap(value => this.search.search(value))
      );

    this.symbols$.subscribe(res => console.log(res));
  }

  public displayFn(value) {
    return value ? value.symbol : undefined;
  }

  public add(event, stock): void {
    event.stopPropagation();

    this.portfolioService.add(stock);
  }

  public stockSelected(event): void {
    console.log(event);
  }
}
