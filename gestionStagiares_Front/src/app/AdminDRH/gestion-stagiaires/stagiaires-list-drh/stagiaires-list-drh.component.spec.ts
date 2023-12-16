import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesListDRHComponent } from './stagiaires-list-drh.component';

describe('StagiairesListDRHComponent', () => {
  let component: StagiairesListDRHComponent;
  let fixture: ComponentFixture<StagiairesListDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagiairesListDRHComponent]
    });
    fixture = TestBed.createComponent(StagiairesListDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
