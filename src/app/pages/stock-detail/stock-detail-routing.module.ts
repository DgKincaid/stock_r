import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDetailComponent } from './stock-detail.component';

const routes: Routes = [
  {
    path: 'stock-detail/:symbol',
    component: StockDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StockDetailRoutingModule { }
