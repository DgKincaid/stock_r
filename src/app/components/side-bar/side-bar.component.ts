import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: [ './side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarComponent implements AfterViewInit {

  @Input() toggle: Subject<any>;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) { }

  public ngAfterViewInit(): void {

    if (this.toggle !== undefined) {
      // TODO: Unsubscribe
      this.toggle.subscribe(data => {
        this.sidenav.toggle();
        this.cdr.detectChanges();
      });
    }
  }
}
