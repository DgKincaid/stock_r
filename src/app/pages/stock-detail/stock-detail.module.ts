import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StockDetailComponent } from './stock-detail.component';
import { StockDetailRoutingModule } from './stock-detail-routing.module';
import { MaterialModule } from 'src/app/module';
import { AlertsModule } from 'src/app/components';

@NgModule({
  declarations: [StockDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    StockDetailRoutingModule,
    MaterialModule,
    AlertsModule
  ]
})
export class StockDetailModule { }
