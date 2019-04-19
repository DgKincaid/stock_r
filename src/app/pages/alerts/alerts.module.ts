import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListComponent } from './alert-list/alert-list.component';

import { AlertsRoutingModule } from './alerts-routing.module';

@NgModule({
  declarations: [AlertListComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule
  ]
})
export class AlertsPageModule { }
