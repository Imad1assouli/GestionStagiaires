import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesAdminDrhComponent } from './statistiques-admin-drh.component';

describe('StaitistiquesAdminDrhComponent', () => {
  let component: StatistiquesAdminDrhComponent;
  let fixture: ComponentFixture<StatistiquesAdminDrhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesAdminDrhComponent]
    });
    fixture = TestBed.createComponent(StatistiquesAdminDrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
