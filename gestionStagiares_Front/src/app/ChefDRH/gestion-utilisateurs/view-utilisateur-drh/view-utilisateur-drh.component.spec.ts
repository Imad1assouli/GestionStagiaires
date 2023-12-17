import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUtilisateurDRHComponent } from './view-utilisateur-drh.component';

describe('ViewUtilisateurDRHComponent', () => {
  let component: ViewUtilisateurDRHComponent;
  let fixture: ComponentFixture<ViewUtilisateurDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUtilisateurDRHComponent]
    });
    fixture = TestBed.createComponent(ViewUtilisateurDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
