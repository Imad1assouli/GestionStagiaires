import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteStagiaireComponent } from './upadte-stagiaire.component';

describe('UpadteStagiaireComponent', () => {
  let component: UpadteStagiaireComponent;
  let fixture: ComponentFixture<UpadteStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpadteStagiaireComponent]
    });
    fixture = TestBed.createComponent(UpadteStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
