import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilStagiaireComponent } from './acceuil-stagiaire.component';

describe('AcceuilStagiaireComponent', () => {
  let component: AcceuilStagiaireComponent;
  let fixture: ComponentFixture<AcceuilStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilStagiaireComponent]
    });
    fixture = TestBed.createComponent(AcceuilStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
