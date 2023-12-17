import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilChefDRHComponent } from './acceuil-chef-drh.component';

describe('AcceuilChefDRHComponent', () => {
  let component: AcceuilChefDRHComponent;
  let fixture: ComponentFixture<AcceuilChefDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilChefDRHComponent]
    });
    fixture = TestBed.createComponent(AcceuilChefDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
