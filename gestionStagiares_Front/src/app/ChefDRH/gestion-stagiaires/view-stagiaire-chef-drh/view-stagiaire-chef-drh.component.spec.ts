import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStagiaireChefDRHComponent } from './view-stagiaire-chef-drh.component';

describe('ViewStagiaireChefDRHComponent', () => {
  let component: ViewStagiaireChefDRHComponent;
  let fixture: ComponentFixture<ViewStagiaireChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStagiaireChefDRHComponent]
    });
    fixture = TestBed.createComponent(ViewStagiaireChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
