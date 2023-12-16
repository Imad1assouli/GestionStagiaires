import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStagiaireAdminDRHComponent } from './update-stagiaire-admin-drh.component';

describe('UpdateStagiaireAdminDRHComponent', () => {
  let component: UpdateStagiaireAdminDRHComponent;
  let fixture: ComponentFixture<UpdateStagiaireAdminDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStagiaireAdminDRHComponent]
    });
    fixture = TestBed.createComponent(UpdateStagiaireAdminDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
