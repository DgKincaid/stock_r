import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BannerComponent {

  @Output() menuClick: EventEmitter<void> = new EventEmitter<any>();

  constructor() { }

  public menu(): void {
    this.menuClick.emit();
  }
}
