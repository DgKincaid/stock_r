import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSliderChange } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IStock } from 'src/app/models';

@Component({
  selector: 'app-dialog-add-alert',
  templateUrl: './dialog-add-alert.component.html',
  styleUrls: ['./dialog-add-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAddAlertComponent implements OnInit {

  public stock: any;
  public form: FormGroup;

  public max = 100;
  public min = 0;
  public step = 1;
  public thumbLabel = false;
  public value = 0;

  constructor(public dialogRef: MatDialogRef<DialogAddAlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.stock = this.data.stock;

    this.value = this.stock.latestPrice;

    this.max = Math.ceil(this.value + this.value * .5);
    this.min = Math.floor(this.value * .5);

    this.form = this.fb.group({
      symbol: [this.data.stock.symbol],
      currentValue: [this.stock.latestPrice],
      watchValue: [this.stock.latestPrice]
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public create(): void {
    this.dialogRef.close(this.form.value);
  }

  public onSlider(change: MatSliderChange): void {
    this.form.controls['watchValue'].setValue(change.value);
  }
}
