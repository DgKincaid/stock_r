import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public stockSelected(stock): void {
    console.log(stock);

    this.router.navigate(['/stock-detail/' + stock.symbol]);
  }
}
