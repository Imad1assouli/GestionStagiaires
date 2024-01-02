import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterStageComponentChefDRH } from './affecter-stage.component';

describe('AffecterStageComponent', () => {
  let component: AffecterStageComponentChefDRH;
  let fixture: ComponentFixture<AffecterStageComponentChefDRH>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterStageComponentChefDRH]
    });
    fixture = TestBed.createComponent(AffecterStageComponentChefDRH);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
