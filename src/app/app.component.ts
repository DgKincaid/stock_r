import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  public toggleSidenav: Subject<any> = new Subject<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
  }

  public ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public addAlert(): void {
    console.log('add alert');
  }

  public addPortfolio(): void {
    console.log('add portfolio');
  }
}
