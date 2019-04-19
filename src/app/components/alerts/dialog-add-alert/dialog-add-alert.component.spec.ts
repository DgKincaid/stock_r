import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAlertComponent } from './dialog-add-alert.component';

describe('DialogAddAlertComponent', () => {
  let component: DialogAddAlertComponent;
  let fixture: ComponentFixture<DialogAddAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
