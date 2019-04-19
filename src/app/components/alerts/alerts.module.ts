import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatSliderModule, MatCardModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertsComponent } from './alerts/alerts.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { DialogAddAlertComponent } from './dialog-add-alert/dialog-add-alert.component';

@NgModule({
  declarations: [AlertsComponent, AddAlertComponent, DialogAddAlertComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertsComponent,
    AddAlertComponent
  ],
  entryComponents: [
    DialogAddAlertComponent
  ]
})

export class AlertsModule { }
