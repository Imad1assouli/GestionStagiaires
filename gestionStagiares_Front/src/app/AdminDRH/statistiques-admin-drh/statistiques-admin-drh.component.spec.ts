import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesAdminDRHComponent } from './statistiques-admin-drh.component';

describe('StatistiquesAdminDRHComponent', () => {
  let component: StatistiquesAdminDRHComponent;
  let fixture: ComponentFixture<StatistiquesAdminDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesAdminDRHComponent]
    });
    fixture = TestBed.createComponent(StatistiquesAdminDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
