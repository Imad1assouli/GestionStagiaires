import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursDRHListComponent } from './utilisateurs-drh-list.component';

describe('UtilisateursDRHListComponent', () => {
  let component: UtilisateursDRHListComponent;
  let fixture: ComponentFixture<UtilisateursDRHListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateursDRHListComponent]
    });
    fixture = TestBed.createComponent(UtilisateursDRHListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
