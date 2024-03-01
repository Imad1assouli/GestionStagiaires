import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadransListAdminDrhComponent } from './encadrans-list-admin-drh.component';

describe('EncadransListAdminDrhComponent', () => {
  let component: EncadransListAdminDrhComponent;
  let fixture: ComponentFixture<EncadransListAdminDrhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncadransListAdminDrhComponent]
    });
    fixture = TestBed.createComponent(EncadransListAdminDrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
