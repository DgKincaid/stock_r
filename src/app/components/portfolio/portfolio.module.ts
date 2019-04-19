import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    PortfolioListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    PortfolioListComponent
  ]
})
export class PortfolioModule { }
