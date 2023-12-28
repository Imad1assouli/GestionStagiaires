import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageAdmindrhComponent } from './add-stage-admindrh.component';

describe('AddStageAdmindrhComponent', () => {
  let component: AddStageAdmindrhComponent;
  let fixture: ComponentFixture<AddStageAdmindrhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStageAdmindrhComponent]
    });
    fixture = TestBed.createComponent(AddStageAdmindrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
