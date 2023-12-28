import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterStageComponent } from './affecter-stage.component';

describe('AffecterStageComponent', () => {
  let component: AffecterStageComponent;
  let fixture: ComponentFixture<AffecterStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterStageComponent]
    });
    fixture = TestBed.createComponent(AffecterStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
