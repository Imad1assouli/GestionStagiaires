import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStagiaireChefDRHComponent } from './update-stagiaire-chef-drh.component';

describe('UpdateStagiaireChefDRHComponent', () => {
  let component: UpdateStagiaireChefDRHComponent;
  let fixture: ComponentFixture<UpdateStagiaireChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStagiaireChefDRHComponent]
    });
    fixture = TestBed.createComponent(UpdateStagiaireChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
