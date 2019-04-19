import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: Display list of users alerts allow delete and update
}
