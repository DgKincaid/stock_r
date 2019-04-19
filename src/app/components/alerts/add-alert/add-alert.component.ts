import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { IStock } from 'src/app/models';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { DialogAddAlertComponent } from '../dialog-add-alert/dialog-add-alert.component';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAlertComponent {

  @Input() stock: IStock;

  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  public add(): void {
    const dialogRef = this.dialog.open(DialogAddAlertComponent, {
      data: { stock: this.stock }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');

      console.log(result);

      this.alertService.add(result);
    });
  }
}
