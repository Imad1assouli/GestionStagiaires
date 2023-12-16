import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursListComponent } from './utilisateurs-list.component';

describe('UtlisateursListComponent', () => {
  let component: UtilisateursListComponent;
  let fixture: ComponentFixture<UtilisateursListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateursListComponent]
    });
    fixture = TestBed.createComponent(UtilisateursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
