import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageChefDRHComponent } from './add-stage-chef-drh.component';

describe('AddStageChefDRHComponent', () => {
  let component: AddStageChefDRHComponent;
  let fixture: ComponentFixture<AddStageChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStageChefDRHComponent]
    });
    fixture = TestBed.createComponent(AddStageChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
