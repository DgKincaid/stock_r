import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertListComponent } from './alert-list/alert-list.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AlertsRoutingModule { }
