import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertloginComponent } from './alertlogin.component';

describe('AlertloginComponent', () => {
  let component: AlertloginComponent;
  let fixture: ComponentFixture<AlertloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertloginComponent]
    });
    fixture = TestBed.createComponent(AlertloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
