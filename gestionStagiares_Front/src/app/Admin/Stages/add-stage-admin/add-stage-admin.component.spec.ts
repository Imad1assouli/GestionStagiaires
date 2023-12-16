import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageAdminComponent } from './add-stage-admin.component';

describe('AddStageAdminComponent', () => {
  let component: AddStageAdminComponent;
  let fixture: ComponentFixture<AddStageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStageAdminComponent]
    });
    fixture = TestBed.createComponent(AddStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
