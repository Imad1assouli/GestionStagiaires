import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStagesStagiaireComponent } from './list-stages-stagiaire.component';

describe('ListStagesStagiaireComponent', () => {
  let component: ListStagesStagiaireComponent;
  let fixture: ComponentFixture<ListStagesStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStagesStagiaireComponent]
    });
    fixture = TestBed.createComponent(ListStagesStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
