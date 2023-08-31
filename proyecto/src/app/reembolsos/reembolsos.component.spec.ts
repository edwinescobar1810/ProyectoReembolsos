import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReembolsosComponent } from './reembolsos.component';

describe('ReembolsosComponent', () => {
  let component: ReembolsosComponent;
  let fixture: ComponentFixture<ReembolsosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReembolsosComponent]
    });
    fixture = TestBed.createComponent(ReembolsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
