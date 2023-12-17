import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesChefDRHComponent } from './statistiques-chef-drh.component';

describe('StatistiquesChefDRHComponent', () => {
  let component: StatistiquesChefDRHComponent;
  let fixture: ComponentFixture<StatistiquesChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesChefDRHComponent]
    });
    fixture = TestBed.createComponent(StatistiquesChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
