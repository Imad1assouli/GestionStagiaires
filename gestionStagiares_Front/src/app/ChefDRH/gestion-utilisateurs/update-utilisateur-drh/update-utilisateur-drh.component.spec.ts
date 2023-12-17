import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUtilisateurDRHComponent } from './update-utilisateur-drh.component';

describe('UpdateUtilisateurDRHComponent', () => {
  let component: UpdateUtilisateurDRHComponent;
  let fixture: ComponentFixture<UpdateUtilisateurDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUtilisateurDRHComponent]
    });
    fixture = TestBed.createComponent(UpdateUtilisateurDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
