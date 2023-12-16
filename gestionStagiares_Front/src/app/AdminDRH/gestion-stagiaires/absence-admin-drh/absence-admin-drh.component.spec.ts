import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceAdminDRHComponent } from './absence-admin-drh.component';

describe('AbsenceAdminDRHComponent', () => {
  let component: AbsenceAdminDRHComponent;
  let fixture: ComponentFixture<AbsenceAdminDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceAdminDRHComponent]
    });
    fixture = TestBed.createComponent(AbsenceAdminDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
