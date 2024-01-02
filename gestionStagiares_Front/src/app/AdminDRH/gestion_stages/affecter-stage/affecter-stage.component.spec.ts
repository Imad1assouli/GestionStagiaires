import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterStageComponentAdminDrh } from './affecter-stage.component';

describe('AffecterStageComponent', () => {
  let component: AffecterStageComponentAdminDrh;
  let fixture: ComponentFixture<AffecterStageComponentAdminDrh>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterStageComponentAdminDrh]
    });
    fixture = TestBed.createComponent(AffecterStageComponentAdminDrh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
