import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceChefDRHComponent } from './absence-chef-drh.component';

describe('AbsenceChefDRHComponent', () => {
  let component: AbsenceChefDRHComponent;
  let fixture: ComponentFixture<AbsenceChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceChefDRHComponent]
    });
    fixture = TestBed.createComponent(AbsenceChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
