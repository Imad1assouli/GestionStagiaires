import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilisateurDRHComponent } from './create-utilisateur-drh.component';

describe('CreateUtilisateurDRHComponent', () => {
  let component: CreateUtilisateurDRHComponent;
  let fixture: ComponentFixture<CreateUtilisateurDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUtilisateurDRHComponent]
    });
    fixture = TestBed.createComponent(CreateUtilisateurDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
