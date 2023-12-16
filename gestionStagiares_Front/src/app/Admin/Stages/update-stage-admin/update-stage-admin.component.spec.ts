import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStageAdminComponent } from './update-stage-admin.component';

describe('UpdateStageAdminComponent', () => {
  let component: UpdateStageAdminComponent;
  let fixture: ComponentFixture<UpdateStageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStageAdminComponent]
    });
    fixture = TestBed.createComponent(UpdateStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
