import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDeleteComponent } from './open-delete.component';

describe('OpenDeleteComponent', () => {
  let component: OpenDeleteComponent;
  let fixture: ComponentFixture<OpenDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenDeleteComponent]
    });
    fixture = TestBed.createComponent(OpenDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
