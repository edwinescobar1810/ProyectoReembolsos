import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMiperfilComponent } from './open-miperfil.component';

describe('OpenMiperfilComponent', () => {
  let component: OpenMiperfilComponent;
  let fixture: ComponentFixture<OpenMiperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenMiperfilComponent]
    });
    fixture = TestBed.createComponent(OpenMiperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
