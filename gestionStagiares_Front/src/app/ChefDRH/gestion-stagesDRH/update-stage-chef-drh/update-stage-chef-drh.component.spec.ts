import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStageChefDRHComponent } from './update-stage-chef-drh.component';

describe('UpdateStageChefDRHComponent', () => {
  let component: UpdateStageChefDRHComponent;
  let fixture: ComponentFixture<UpdateStageChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStageChefDRHComponent]
    });
    fixture = TestBed.createComponent(UpdateStageChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
